import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_REQUESTS = 3; // Max 3 requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor intenta más tarde.' },
        { status: 429 }
      );
    }

    // Parse body with size limit check
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json(
        { error: 'Solicitud demasiado grande' },
        { status: 413 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100 || email.length > 255 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Los campos exceden la longitud máxima permitida' },
        { status: 400 }
      );
    }

    // Email validation (more strict)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeHtml(name.trim());
    const sanitizedEmail = sanitizeHtml(email.trim());
    const sanitizedMessage = sanitizeHtml(message.trim());

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contacto Panitex <onboarding@resend.dev>',
      to: ['nicolas.silva@panitex.com.co', 'rene.silva@panitex.com.co'],
      subject: `Nuevo mensaje de contacto de ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Enviado desde el formulario de contacto de Panitex</p>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    // Log error securely (don't expose details to client)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending email:', error);
    }
    return NextResponse.json(
      { error: 'Error al enviar el email. Por favor intenta más tarde.' },
      { status: 500 }
    );
  }
}

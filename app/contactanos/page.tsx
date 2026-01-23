"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

export default function ContactanosPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email inválido';
        isValid = false;
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Contáctanos" }
      ]} />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/lanchas3.jpg"
            alt="Contacto"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent z-5" />
        
        {/* Title */}
        <h1 className="relative z-10 text-6xl font-bold text-white drop-shadow-2xl px-8 md:pl-16">
          Contacto
        </h1>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-8 ">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Información de Contacto</h2>
              <div className="space-y-2">
                <p><strong>Email:</strong> rene.silva@panitex.com.co</p>
                <p><strong>Teléfono:</strong> +57 315 852 2816</p>
                <p><strong>Dirección:</strong> Bogotá, Colombia</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Formulario de Contacto</h2>
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de contacto">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">{statusMessage}</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{statusMessage}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <input 
                    id="contact-name"
                    name="name"
                    type="text" 
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    disabled={isSubmitting}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input 
                    id="contact-email"
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    disabled={isSubmitting}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    placeholder="Mensaje" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    disabled={isSubmitting}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  aria-label="Enviar formulario de contacto"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

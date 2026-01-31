import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import {NextIntlClientProvider} from 'next-intl';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
 
  return {
    title: {
      default: locale === 'es' 
        ? "Panitex - Soluciones Industriales y Desarrollo Social"
        : "Panitex - Industrial Solutions and Social Development",
      template: "%s | Panitex"
    },
    description: locale === 'es'
      ? "Panitex S.A.S - Líderes en soluciones industriales y sistemas de desarrollo social. Impacto en 127 comunidades indígenas con proyectos de infraestructura pública en Colombia."
      : "Panitex S.A.S - Leaders in industrial solutions and social development systems. Impact on 127 indigenous communities with public infrastructure projects in Colombia.",
    keywords: locale === 'es' 
      ? ["Panitex", "soluciones industriales", "desarrollo social", "comunidades indígenas", "infraestructura pública", "Colombia", "proyectos sociales"]
      : ["Panitex", "industrial solutions", "social development", "indigenous communities", "public infrastructure", "Colombia", "social projects"],
    authors: [{ name: "Panitex S.A.S" }],
    creator: "Panitex S.A.S",
    publisher: "Panitex S.A.S",
    verification: {
      google: "R5uyY4MB6o9Xu7QxPtdJL1AjhqB6EHh1hTzylZirBOw",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://panitex.com.co'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en'
      }
    },
    openGraph: {
      title: locale === 'es' 
        ? 'Panitex - Soluciones Industriales y Desarrollo Social'
        : 'Panitex - Industrial Solutions and Social Development',
      description: locale === 'es'
        ? 'Líderes en soluciones industriales y sistemas de desarrollo social en Colombia'
        : 'Leaders in industrial solutions and social development systems in Colombia',
      url: `/${locale}`,
      siteName: 'Panitex',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get messages for client components
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <ErrorBoundary>
            <Header />
            {children}
            <Footer />
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

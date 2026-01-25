import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Panitex - Soluciones Industriales y Desarrollo Social",
    template: "%s | Panitex"
  },
  description: "Panitex S.A.S - Líderes en soluciones industriales y sistemas de desarrollo social. Impacto en 127 comunidades indígenas con proyectos de infraestructura pública en Colombia.",
  keywords: ["Panitex", "soluciones industriales", "desarrollo social", "comunidades indígenas", "infraestructura pública", "Colombia", "proyectos sociales"],
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
    canonical: '/',
  },
  openGraph: {
    title: 'Panitex - Soluciones Industriales y Desarrollo Social',
    description: 'Líderes en soluciones industriales y sistemas de desarrollo social en Colombia',
    url: '/',
    siteName: 'Panitex',
    locale: 'es_CO',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}

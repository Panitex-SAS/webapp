"use client";

import {Link} from "../../../i18n/routing";
import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <Image 
                src="/images/logo.jpg" 
                alt="Panitex Logo" 
                width={80} 
                height={80}
                className="object-contain"
              />
              <h3 className="text-2xl font-bold">Panitex</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-500 mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  {t('inicio')}
                </Link>
              </li>
              <li>
                <Link href="/nosotros/ceo" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  {t('ceo')}
                </Link>
              </li>
              <li>
                <Link href="/nosotros/historia" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  {t('historia')}
                </Link>
              </li>
              <li>
                <Link href="/nosotros/proposito-valores" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  {t('purposeValues')}
                </Link>
              </li>
              <li>
                <Link href="/contactanos" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-500 mb-4">{t('systems')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/industrias/transporte-maritimo-fluvial" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Transporte Marítimo y Fluvial
                </Link>
              </li>
              <li>
                <Link href="/industrias/comunicaciones" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Comunicaciones
                </Link>
              </li>
              <li>
                <Link href="/industrias/proteccion" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Protección
                </Link>
              </li>
              <li>
                <Link href="/industrias/dotacion-especializada" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Dotación Especializada
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-500 mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+573158522816" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  +57 315 852 2816
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rene.silva@panitex.com.co" className="text-gray-400 hover:text-red-400 transition-colors text-sm break-all">
                  rene.silva@panitex.com.co
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">
                  Bogotá, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Panitex S.A.S. {t('allRightsReserved')}.
            </p>
            <div className="flex space-x-6">
              <Link href="/nosotros/proposito-valores" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                {t('values')}
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/contactanos" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

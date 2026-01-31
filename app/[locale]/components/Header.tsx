"use client";

import {Link} from "../../../i18n/routing";
import Image from "next/image";
import { useState, useCallback } from "react";
import {useTranslations} from 'next-intl';
import industriesData from "../data/industries.json";
import nosotrosData from "../data/nosotros.json";
import type { Industry } from "../types";
import LanguageSwitcher from "./LanguageSwitcher";

interface NosotrosSection {
  id: string;
  name: string;
  image: string;
}

export default function Header() {
  const t = useTranslations('Header');
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const industries = industriesData as Industry[];
  const nosotrosSections = nosotrosData as NosotrosSection[];

  const handleIndustriesMouseEnter = useCallback(() => {
    setIsIndustriesOpen(true);
    setIsNosotrosOpen(false);
  }, []);

  const handleNosotrosMouseEnter = useCallback(() => {
    setIsNosotrosOpen(true);
    setIsIndustriesOpen(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsIndustriesOpen(false);
    setIsNosotrosOpen(false);
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 border-b shadow-sm bg-[rgb(255,255,255)]"
      onMouseLeave={handleMouseLeave}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Panitex Logo" 
              width={120} 
              height={60}
              className="object-contain"
              style={{ width: 'auto', height: '60px' }}
            />
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex gap-20 mx-auto">
            <li>
              <Link 
                href="/" 
                className="text-lg text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t('inicio')}
              </Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={handleNosotrosMouseEnter}
            >
              <Link
                href="/nosotros/ceo" 
                className="text-lg text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center"
                aria-expanded={isNosotrosOpen}
                aria-haspopup="true"
              >
                {t('nosotros')}
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isNosotrosOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={handleIndustriesMouseEnter}
            >
              <Link
                href="/industrias" 
                className="text-lg text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center"
                aria-expanded={isIndustriesOpen}
                aria-haspopup="true"
              >
                {t('sistemas')}
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                href="/contactanos" 
                className="text-lg text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t('contactanos')}
              </Link>
            </li>
          </ul>
          
          {/* Language Switcher and Hamburger - Desktop and Mobile */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Hamburger Menu Button - Mobile only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu - Shown when hamburger is clicked */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-lg text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('inicio')}
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros/ceo"
                  className="block text-lg text-gray-700 hover:text-red-600 transition-colors font-medium mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nosotros')}
                </Link>
                <ul className="ml-4 flex flex-col gap-2">
                  {nosotrosSections.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={`/nosotros/${section.id}`}
                        className="block text-gray-600 hover:text-red-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {section.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  href="/industrias"
                  className="block text-lg text-gray-700 hover:text-red-600 transition-colors font-medium mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('sistemas')}
                </Link>
                <ul className="ml-4 flex flex-col gap-2">
                  {industries.map((industry) => (
                    <li key={industry.id}>
                      <Link
                        href={`/industrias/${industry.id}`}
                        className="block text-gray-600 hover:text-red-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link 
                  href="/contactanos" 
                  className="block text-lg text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contactanos')}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Desktop Nosotros Dropdown Menu */}
      {isNosotrosOpen && (
        <div 
          className="hidden lg:block absolute left-0 right-0 top-full border-t shadow-lg bg-[rgb(237,241,237)]"
          onMouseEnter={handleNosotrosMouseEnter}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {nosotrosSections.map((section, index) => (
                <div key={section.id} className="flex items-center">
                  <Link
                    href={`/nosotros/${section.id}`}
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium text-base"
                  >
                    {section.name}
                  </Link>
                  {index < nosotrosSections.length - 1 && (
                    <span className="text-gray-300 mx-4">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Industries Dropdown Menu */}
      {isIndustriesOpen && (
        <div 
          className="hidden lg:block absolute left-0 right-0 top-full border-t shadow-lg bg-[rgb(237,241,237)]"
          onMouseEnter={handleIndustriesMouseEnter}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {industries.map((industry, index) => (
                <div key={industry.id} className="flex items-center">
                  <Link
                    href={`/industrias/${industry.id}`}
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium text-base"
                  >
                    {industry.name}
                  </Link>
                  {index < industries.length - 1 && (
                    <span className="text-gray-300 mx-4">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

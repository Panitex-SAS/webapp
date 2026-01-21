"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import industriesData from "@/app/data/industries.json";
import type { Industry } from "@/app/types";

export default function Header() {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const industries = industriesData as Industry[];

  // Debounced handlers to prevent excessive re-renders
  const handleMouseEnter = useCallback(() => {
    setIsIndustriesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsIndustriesOpen(false);
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
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/nosotros" 
                className="text-lg text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Nosotros
              </Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={handleMouseEnter}
            >
              <Link
                href="/industrias" 
                className="text-lg text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center"
                aria-expanded={isIndustriesOpen}
                aria-haspopup="true"
              >
                Sistemas de Desarrollo Social
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
                Contáctanos
              </Link>
            </li>
          </ul>
          
          {/* Spacer to balance the logo - Desktop only */}
          <div className="hidden lg:block w-30"></div>
          
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
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/nosotros" 
                  className="block text-lg text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/industrias"
                  className="block text-lg text-gray-700 hover:text-red-600 transition-colors font-medium mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sistemas de Desarrollo Social
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
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Desktop Dropdown Menu */}
      {isIndustriesOpen && (
        <div 
          className="hidden lg:block absolute left-0 right-0 top-full border-t shadow-lg bg-[rgb(237,241,237)]"
          onMouseEnter={handleMouseEnter}
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

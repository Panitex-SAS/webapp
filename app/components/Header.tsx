"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import industriesData from "@/app/data/industries.json";

interface Industry {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export default function Header() {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const industries = industriesData as Industry[];

  return (
    <header 
      className="sticky top-0 z-50 bg-white border-b shadow-sm"
      onMouseLeave={() => setIsIndustriesOpen(false)}
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
            />
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex gap-20 mx-auto">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/nosotros" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Nosotros
              </Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
            >
              <button 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center"
              >
                Industrias
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>
            <li>
              <Link 
                href="/contactanos" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
          
          {/* Spacer to balance the logo - Desktop only */}
          <div className="hidden lg:block w-[120px]"></div>
          
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
                  className="block text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/nosotros" 
                  className="block text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <div className="text-gray-700 font-medium mb-2">Industrias</div>
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
                  className="block text-gray-700 hover:text-red-600 transition-colors font-medium"
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
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t shadow-lg"
          onMouseEnter={() => setIsIndustriesOpen(true)}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-center gap-8 flex-wrap">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industrias/${industry.id}`}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

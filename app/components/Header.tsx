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
  const industries = industriesData as Industry[];

  return (
    <header 
      className="sticky top-0 z-50 bg-white border-b shadow-sm"
      onMouseLeave={() => setIsIndustriesOpen(false)}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Panitex Logo" 
              width={120} 
              height={60}
              className="object-contain"
            />
          </Link>
          <ul className="flex gap-8">
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
        </div>
      </nav>
      
      {/* Full Width Dropdown Menu */}
      {isIndustriesOpen && (
        <div 
          className="absolute left-0 right-0 top-full bg-white border-t shadow-lg"
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

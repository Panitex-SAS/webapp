"use client";

import Image from "next/image";
import { useState } from "react";

export default function NosotrosPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Company History Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-red-600">Nosotros</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative w-full h-125 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/founders.png"
                alt="Fundadores de Panitex"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Company History Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestra Historia</h2>
              <div className="text-lg space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Cards Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div 
              className="relative h-96 rounded-lg overflow-hidden shadow-xl cursor-pointer group"
              onMouseEnter={() => setActiveCard('mission')}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === 'mission' ? null : 'mission')}
            >
              {/* Background Image */}
              <Image
                src="/images/mission.jpg"
                alt="Misión"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Default State - Title Only */}
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${activeCard === 'mission' ? 'opacity-0' : 'opacity-100'}`}>
                <h2 className="text-5xl font-bold text-white drop-shadow-2xl">Misión</h2>
              </div>
              
              {/* Hover/Active State - Description */}
              <div className={`absolute inset-0 bg-red-600/90 flex items-center justify-center p-8 transition-opacity duration-300 ${activeCard === 'mission' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center text-white space-y-4">
                  <h2 className="text-4xl font-bold mb-4">Misión</h2>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className="relative h-96 rounded-lg overflow-hidden shadow-xl cursor-pointer group"
              onMouseEnter={() => setActiveCard('vision')}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === 'vision' ? null : 'vision')}
            >
              {/* Background Image */}
              <Image
                src="/images/vision.jpg"
                alt="Visión"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Default State - Title Only */}
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${activeCard === 'vision' ? 'opacity-0' : 'opacity-100'}`}>
                <h2 className="text-5xl font-bold text-white drop-shadow-2xl">Visión</h2>
              </div>
              
              {/* Hover/Active State - Description */}
              <div className={`absolute inset-0 bg-red-600/90 flex items-center justify-center p-8 transition-opacity duration-300 ${activeCard === 'vision' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center text-white space-y-4">
                  <h2 className="text-4xl font-bold mb-4">Visión</h2>
                  <p className="text-lg">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function NosotrosPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Nosotros" }
      ]} />
      
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
              <h2 className="text-3xl font-bold">Nuestro CEO</h2>
              <div className="text-lg space-y-4">
                <p> 
                  Panitex S.A.S se origina en la experiencia de su CEO, con más de 20 años liderando contratos públicos de alta complejidad técnica y logística en Colombia, respaldado por una sólida formación en la industria textil y conocimiento integral de la cadena productiva.
                </p> 
                <p> 
                  En sus inicios, la empresa ejecutó contratos de blindaje vehicular y chalecos antibalas, fortaleciendo capacidades en cumplimiento técnico, control de calidad y logística especializada, lo que permitió su expansión hacia dotaciones especializadas para la Policía Nacional y comunidades indígenas en coordinación con la UNP. 
                </p> 
                <p> 
                  Actualmente, Panitex concentra uno de sus principales enfoques en la ejecución de soluciones de transporte marítimo y fluvial para comunidades indígenas remotas, garantizando conectividad, acceso a bienes esenciales y presencia institucional en territorios de difícil acceso. 
                </p> 
                <p> 
                  De manera complementaria, la compañía desarrolla proyectos de blindaje arquitectónico y dotaciones especializadas, consolidándose hoy como un proveedor integral de soluciones de movilidad, protección y dotación especializada, con amplio conocimiento del territorio colombiano. 
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

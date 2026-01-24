"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import industriesData from "@/app/data/industries.json";
import type { Industry } from "@/app/types";

export default function Home() {
  const industries = industriesData as Industry[];
  const kpiRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (kpiRef.current) {
      observer.observe(kpiRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Animate KPI 1: 127
    const duration1 = 2000;
    const steps1 = 60;
    const increment1 = 127 / steps1;
    let current1 = 0;
    const timer1 = setInterval(() => {
      current1 += increment1;
      if (current1 >= 127) {
        setCount1(127);
        clearInterval(timer1);
      } else {
        setCount1(Math.floor(current1));
      }
    }, duration1 / steps1);

    // Animate KPI 2: 60
    const duration2 = 1800;
    const steps2 = 50;
    const increment2 = 60 / steps2;
    let current2 = 0;
    const timer2 = setInterval(() => {
      current2 += increment2;
      if (current2 >= 60) {
        setCount2(60);
        clearInterval(timer2);
      } else {
        setCount2(Math.floor(current2));
      }
    }, duration2 / steps2);

    // Animate KPI 3: 13,000
    const duration3 = 2500;
    const steps3 = 80;
    const increment3 = 13000 / steps3;
    let current3 = 0;
    const timer3 = setInterval(() => {
      current3 += increment3;
      if (current3 >= 13000) {
        setCount3(13000);
        clearInterval(timer3);
      } else {
        setCount3(Math.floor(current3));
      }
    }, duration3 / steps3);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [isVisible]);
  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-start justify-center">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel />
        </div>
        
        {/* Gradient Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent z-5 pointer-events-none" />
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start w-full px-4 md:px-8 md:pl-16 md:pr-8 max-w-full md:max-w-3xl pointer-events-none">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl leading-tight">
            La infraestructura pública es una responsabilidad social
          </h1>
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-full md:max-w-2xl text-white drop-shadow-lg">
            Construir una mejor sociedad es garantizar acceso, protección y comunicación en donde más se necesita
          </p>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <Link
              href="/industrias"
              className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg pointer-events-auto"
            >
              Nuestros proyectos
            </Link>
            <Link
              href="/contactanos"
              className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors shadow-lg pointer-events-auto"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Alcance Territorial Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Section - Left */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-red-600 mb-3">Alcance Territorial</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">Impacto en comunidades indígenas</h3>
              <div className="relative w-full h-125 rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/images/home/alcance_territorial.png"
                  alt="Alcance Territorial Panitex"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-red-600 leading-relaxed">
                <b>Panitex</b> ha implementado en <b><i>127 comunidades</i></b> para dotaciones de enfoque diferencial, en donde se han entregado <b>166 embarcaciones</b>, <b>221 motores</b> y más de <b>8300 accesorios</b>.
              </p>
            </div>

            {/* KPIs Section - Right */}
            <div ref={kpiRef} className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-12">
                {/* KPI 1 */}
                <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-6xl md:text-7xl font-bold text-red-600 mb-3">{count1.toLocaleString()}</div>
                  <p className="text-xl text-gray-700">Comunidades Indígenas Alcanzadas</p>
                </div>

                {/* Separator */}
                <div className={`h-px bg-gray-300 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                {/* KPI 2 */}
                <div className={`text-center lg:text-left transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-6xl md:text-7xl font-bold text-red-600 mb-3">{count2.toLocaleString()}</div>
                  <p className="text-xl text-gray-700">Contratos Públicos Ejecutados</p>
                </div>

                {/* Separator */}
                <div className={`h-px bg-gray-300 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                {/* KPI 3 */}
                <div className={`text-center lg:text-left transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-6xl md:text-7xl font-bold text-red-600 mb-3">{count3.toLocaleString()}</div>
                  <p className="text-xl text-gray-700">Elementos de Dotaciones Especializadas Entregadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Panitex Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            ¿Por qué trabajar con Panitex?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ejecutamos con excelencia.
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Servir al sector público exige más que productos: requiere capacidad de ejecución, confiabilidad y responsabilidad. En Panitex entendemos la excelencia como la habilidad de cumplir en contextos complejos, donde la logística es exigente, el acceso es limitado y cada decisión tiene impacto real sobre comunidades e instituciones.
          </p>
          <Link
            href="/nosotros"
            className="inline-flex items-center text-red-600 hover:underline transition-all">
            Aprende de nuestro propósito y valores
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <h3 className="text-2xl md:text-2xl font-bold italic mt-10 mb-6">
            Aliado confiable del Sector Público
          </h3>
          
          {/* Scrolling Logos */}
          <div className="mt-8 overflow-hidden relative">
            {/* Background bar */}
            <div className="absolute inset-0 bg-white rounded-lg"></div>
            
            <div className="flex animate-scroll-logos gap-12 items-center py-8 relative z-10">
              {/* First set of logos */}
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/CENAC.png" alt="CENAC" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/COPES.png" alt="COPES" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/ESGJQ.png" alt="ESGJQ" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/FRP.png" alt="FRP" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/SGC.png" alt="SGC" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/UNP.png" alt="UNP" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/GobPutumayo.png" alt="Gobierno de Putumayo" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/CENAC.png" alt="CENAC" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/COPES.png" alt="COPES" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/ESGJQ.png" alt="ESGJQ" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/FRP.png" alt="FRP" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/SGC.png" alt="SGC" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/UNP.png" alt="UNP" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
              <div className="w-37.5 h-25 flex items-center justify-center bg-transparent">
                <Image src="/images/home/GobPutumayo.png" alt="Gobierno de Putumayo" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-8 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
            Sistemas de Desarrollo Social
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.id}
                href={`/industrias/${industry.id}`}
                className="group relative p-6 bg-white hover:bg-red-50 rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(25%-1.5rem)] cursor-pointer"
              >
                {/* Industry Image */}
                {industry.image && (
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3 text-red-600 transition-all duration-300">
                  {industry.name}
                </h3>
                
                {/* Content that appears on hover (desktop) or is always visible (mobile) */}
                <div className="max-h-96 opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-96 md:group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                  <span className="text-red-600 group-hover:text-red-700 group-hover:underline font-medium inline-flex items-center">
                    Ver proyectos
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import industriesData from "@/app/data/industries.json";
import type { Industry } from "@/app/types";

export default function Home() {
  const industries = industriesData as Industry[];
  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[80vh] flex flex-col items-start justify-center">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel />
        </div>
        
        {/* Gradient Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent z-5 pointer-events-none" />
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start w-full px-8 md:pl-16 md:pr-8 max-w-3xl pointer-events-none">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            La infraestructura pública es una responsabilidad social
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white drop-shadow-lg">
            Construir una mejor sociedad es garantizar acceso, protección y comunicación en donde más se necesita
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/industrias"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg pointer-events-auto"
            >
              Nuestros proyectos
            </Link>
            <Link
              href="/contactanos"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors shadow-lg pointer-events-auto"
            >
              Contáctanos
            </Link>
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
                <Image src="/images/home/gobPutumayo.png" alt="Gobierno de Putumayo" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
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
                <Image src="/images/home/gobPutumayo.png" alt="Gobierno de Putumayo" width={150} height={0} className="max-w-full max-h-full object-contain" style={{ width: 'auto', height: 'auto' }} unoptimized />
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
              <div 
                key={industry.id} 
                className="group relative p-6 bg-white hover:bg-red-50 rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(25%-1.5rem)]"
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
                
                {/* Hidden content that appears on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                  <Link
                    href={`/industrias/${industry.id}`}
                    className="text-red-600 hover:text-red-700 hover:underline font-medium inline-flex items-center"
                  >
                    Ver proyectos
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

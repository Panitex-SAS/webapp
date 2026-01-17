import Link from "next/link";
import ImageCarousel from "./components/ImageCarousel";
import industriesData from "@/app/data/industries.json";

interface Industry {
  id: string;
  name: string;
  description: string;
  image?: string;
}

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-5" />
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start w-full px-8 md:pl-16 md:pr-8 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            Bienvenido a Panitex
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white drop-shadow-lg">
            Placeholder: Descripción principal de la empresa
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/nosotros"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              Conoce más sobre nosotros
            </Link>
            <Link
              href="/contactanos"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors shadow-lg"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industrias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-red-600">{industry.name}</h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <Link
                  href={`/industrias/${industry.id}`}
                  className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
                >
                  Ver proyectos
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

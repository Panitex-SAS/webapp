import Link from "next/link";
import Image from "next/image";
import industriesData from "@/app/data/industries.json";
import type { Industry } from "@/app/types";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function IndustriasPage() {
  const industries = industriesData as Industry[];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Sistemas de Desarrollo Social" }
      ]} />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center">Sistemas de Desarrollo Social</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Ofrecemos soluciones especializadas para diversos sectores industriales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/industrias/${industry.id}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {industry.image && (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                  <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                    {industry.name}
                  </h2>
                </div>
              )}
              
              <div className="p-6">
                <p className="text-gray-600 line-clamp-3">{industry.description}</p>
                <div className="mt-4 flex items-center text-red-600 font-medium group-hover:underline">
                  Ver más
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

export default function NosotrosPage() {

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
                src="/images/nosotros/rene_silva.png"
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
    </main>
  );
}

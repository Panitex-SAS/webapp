import Image from "next/image";

export default function ContactanosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/lanchas3.jpg"
            alt="Contacto"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-5" />
        
        {/* Title */}
        <h1 className="relative z-10 text-6xl font-bold text-white drop-shadow-2xl px-8 md:pl-16">
          Contacto
        </h1>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-8 ">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            Placeholder: Ponte en contacto con nosotros.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Información de Contacto</h2>
              <div className="space-y-2">
                <p><strong>Email:</strong> rene.silva@panitex.com.co</p>
                <p><strong>Teléfono:</strong> +57 315 852 2816</p>
                <p><strong>Dirección:</strong> Bogotá, Colombia</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Formulario de Contacto</h2>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full p-2 border rounded"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 border rounded"
                />
                <textarea 
                  placeholder="Mensaje" 
                  rows={4}
                  className="w-full p-2 border rounded"
                />
                <button 
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

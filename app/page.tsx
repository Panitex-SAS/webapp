import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenido a Panitex
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-600">
          Placeholder: Descripción principal de la empresa
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/nosotros"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Conoce más sobre nosotros
          </Link>
          <Link
            href="/contactanos"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/nosotros"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Nosotros</h3>
              <p className="text-gray-600">
                Conoce nuestra historia y misión
              </p>
            </Link>
            <Link
              href="/industrias"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Industrias</h3>
              <p className="text-gray-600">
                Experiencia en contratos con diversas industrias
              </p>
            </Link>
            <Link
              href="/contactanos"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Contáctanos</h3>
              <p className="text-gray-600">
                Ponte en contacto con nuestro equipo
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactanosPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
        <section className="space-y-6">
          <p className="text-lg">
            Placeholder: Ponte en contacto con nosotros.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Información de Contacto</h2>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@panitex.com</p>
                <p><strong>Teléfono:</strong> +XX XXX XXX XXXX</p>
                <p><strong>Dirección:</strong> Dirección pendiente</p>
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
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

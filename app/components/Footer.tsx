export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-sm md:text-base">
            <span>Teléfono: +57 315 852 2816</span>
            <span className="hidden md:inline">-</span>
            <a 
              href="mailto:rene.silva@panitex.com.co"
              className="hover:text-red-400 transition-colors"
            >
              rene.silva@panitex.com.co
            </a>
            <span className="hidden md:inline">-</span>
            <span>Bogotá, Colombia</span>
          </div>
          <p className="text-sm text-gray-400">
            Todos los derechos reservados - Panitex S.A.S 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

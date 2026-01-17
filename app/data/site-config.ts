// Site configuration and metadata
export const siteConfig = {
  name: "Panitex",
  description: "PlaceHolder: Soluciones integrales para múltiples industrias",
  tagline: "Excelencia en servicios industriales",
  url: "https://panitex.com", //TODO actualizar con el dominio
  
  // Navigation links
  links: {
    home: "/",
    nosotros: "/nosotros",
    contactanos: "/contactanos",
  },
  
  // Contact information
  contact: {
    email: "rene.silva@panitex.com.co",
    phone: "+57 315 852 2816",
    address: "Bogotá, Colombia",
  },
  
  // Social media links (optional - add when available)
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  
  // Industries data (imported from industries.json)
  industriesPath: "@/app/data/industries.json",
  
  // Copyright information
  copyright: `© ${new Date().getFullYear()} Panitex. Todos los derechos reservados.`,
};

export type SiteConfig = typeof siteConfig;

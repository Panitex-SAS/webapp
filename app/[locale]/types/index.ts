// Shared TypeScript types for the application

export interface LocalizedString {
  es: string;
  en: string;
}

export interface Industry {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  image?: string;
}

export interface Project {
  id: string;
  name: string;
  industryId: string;
  description: string;
  client: string | null;
  year: string;
  image: string;
  sourceUrl: string | null;
}

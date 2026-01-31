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
  name: LocalizedString;
  industryId: string;
  description: LocalizedString;
  client: string | null;
  year: string;
  image?: string;
  sourceUrl: string | null;
}

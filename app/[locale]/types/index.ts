// Shared TypeScript types for the application

export interface Industry {
  id: string;
  name: string;
  description: string;
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

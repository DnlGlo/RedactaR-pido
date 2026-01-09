export enum ContentType {
  EMAIL = 'Email Profesional',
  SOCIAL = 'Post Redes Sociales',
  ARTICLE = 'Artículo Blog',
  AD = 'Anuncio Publicitario'
}

export enum ToneType {
  PROFESSIONAL = 'Profesional',
  CASUAL = 'Cercano/Amigable',
  PERSUASIVE = 'Persuasivo',
  URGENT = 'Urgente'
}

export interface GenerationRequest {
  topic: string;
  type: ContentType;
  tone: ToneType;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

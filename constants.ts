import { FaqItem, Testimonial } from "./types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Joan Blanch",
    role: "CEO Marketing Agency",
    avatar: "https://picsum.photos/100/100?random=1",
    text: "Excelente Herramienta. Llevo un tiempo probando varias herramientas para generar contenido y RedactaRápido está entre las mejores. Ya llevo más de 15 horas de trabajo ahorradas.",
    stars: 5
  },
  {
    id: 2,
    name: "Laura Gómez",
    role: "Content Creator",
    avatar: "https://picsum.photos/100/100?random=2",
    text: "La calidad de los textos es impresionante. Google no detecta que es IA y mis métricas SEO han mejorado considerablemente.",
    stars: 5
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    role: "Copywriter Freelance",
    avatar: "https://picsum.photos/100/100?random=3",
    text: "Dile adiós al síndrome de la hoja en blanco. Es mi compañero diario para redactar emails de venta.",
    stars: 4
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿En qué me puede ayudar RedactaRápido?",
    answer: "Te ayuda a crear artículos, correos, anuncios y posts para redes sociales optimizados para SEO y persuasión en cuestión de segundos."
  },
  {
    question: "¿El contenido generado tiene plagio?",
    answer: "No. El contenido es 100% original generado por inteligencia artificial avanzada, asegurando unicidad en cada texto."
  },
  {
    question: "¿Qué tecnologías de IA utilizan?",
    answer: "Utilizamos los modelos más avanzados de Gemini y Google para asegurar coherencia, naturalidad y optimización semántica."
  },
  {
    question: "¿Puedo probarlo gratis?",
    answer: "Sí, tienes una prueba gratuita limitada para que experimentes la potencia de nuestra herramienta antes de suscribirte."
  }
];

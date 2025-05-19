// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  details?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto de Limpieza de Terreno",
    description: "Preparación de terreno para construcción comercial",
    image: "/images/maquina1.webp",
    alt: "Terreno antes y después de la limpieza",
    details: "Se utilizó maquinaria pesada para remover escombros y nivelar el terreno.",
    stats: [
      { value: "2,500 m²", label: "Área limpiada" },
      { value: "3 días", label: "Tiempo de ejecución" },
      { value: "15 ton", label: "Escombros removidos" },
      { value: "100%", label: "Satisfacción del cliente" }
    ]
  },
  {
    id: 2,
    title: "Desmonte de Área Industrial",
    description: "Limpieza de antigua fábrica para remodelación",
    image: "/images/maquina1.webp",
    alt: "Área industrial antes y después del desmonte",
    stats: [
      { value: "5,000 m²", label: "Área trabajada" },
      { value: "1 semana", label: "Tiempo de ejecución" }
    ]
  },

  {
    id: 3,
    title: "Desmonte de Área Industrial",
    description: "Limpieza de antigua fábrica para remodelación",
    image: "/images/maquina1.webp",
    alt: "Área industrial antes y después del desmonte",
    stats: [
      { value: "5,000 m²", label: "Área trabajada" },
      { value: "1 semana", label: "Tiempo de ejecución" }
    ]
  },
  {
    id: 4,
    title: "Desmonte de Área Industrial",
    description: "Limpieza de antigua fábrica para remodelación",
    image: "/images/maquina1.webp",
    alt: "Área industrial antes y después del desmonte",
    stats: [
      { value: "5,000 m²", label: "Área trabajada" },
      { value: "1 semana", label: "Tiempo de ejecución" }
    ]
  }
  // Más proyectos según sea necesario
];


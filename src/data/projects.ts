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
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Residential Land Clearing",
    description: "Complete land clearing for residential development",
    image: "/images/landClearing2.webp",
    alt: "Excavation equipment working",
    details: "Este proyecto incluyó desmonte completo para desarrollo residencial...",
    stats: [
      { value: "2,500 m²", label: "Área limpiada" },
      { value: "3 días", label: "Tiempo de ejecución" },
      { value: "15 ton", label: "Escombros removidos" },
      { value: "100%", label: "Satisfacción del cliente" }
    ],
    gallery: ["/images/maquina1.webp", "/images/maquina1.webp"]
  },
  {
    id: 2,
    title: "Commercial Excavation",
    description: "Precision excavation for commercial building",
    image: "/images/excavation1.webp",
    alt: "Commercial construction site",
    details: "Excavación de precisión para edificio comercial de 10 pisos...",
    stats: [
      { value: "5,000 m²", label: "Área trabajada" },
      { value: "1 semana", label: "Tiempo de ejecución" }
    ],
    gallery: ["/images/maquina1.webp"]
  },
  {
    id: 3,
    title: "Water Delivery",
    description: "Non-potable water for agriculture",
    image: "/images/water1.webp",
    alt: "Water delivery truck",
    details: "Suministro de agua no potable para agricultura en áreas rurales..."
  },
  {
    id: 4,
    title: "Utility Trenching",
    description: "Trenching for neighborhood utilities",
    image: "/images/trenching2.avif",
    alt: "Underground utility work",
    details: "Zanjeado para instalación de servicios públicos en vecindario..."
  }
];
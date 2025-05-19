// src/data/services.ts
import { Construction, Hammer, LandPlot, Droplet, ArrowDownWideNarrow } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  alt: string;
  details?: string;
  features?: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Excavation",
    slug: "excavation",
    description: "Precise land preparation for residential and commercial projects using state-of-the-art machinery.",
    icon: Construction,
    image: "/images/maquina1.webp",
    alt: "Excavation machinery at work",
    features: [
      "Precision grading and leveling",
      "Foundation preparation",
      "Site development",
      "Earthmoving services"
    ],
    stats: [
      { value: "50+", label: "Projects completed" },
      { value: "24/7", label: "Availability" }
    ]
  },
  {
    id: 2,
    title: "Demolition",
    slug: "demolition",
    description: "Safe and efficient removal of existing structures using specialized techniques.",
    icon: Hammer,
    image: "/images/services/demolition.jpg",
    alt: "Demolition process",
    features: [
      "Structural dismantling",
      "Interior demolition",
      "Concrete breaking",
      "Debris removal"
    ]
  },
  // Agrega los demás servicios siguiendo el mismo patrón...
];
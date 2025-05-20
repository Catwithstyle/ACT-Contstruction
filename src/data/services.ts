// src/data/services.ts
import { 
  Construction, 
  Hammer, 
  LandPlot, 
  Droplet, 
  ArrowDownWideNarrow, 
  Wrench, 
  Truck,
  Gauge,
  HardHat
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  icon: React.ComponentType<any>;
  image: string;
  alt: string;
  details?: string;
  features?: string[];
  benefits?: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
  gallery?: string[];
  processSteps?: Array<{
    title: string;
    description: string;
  }>;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Excavation",
    slug: "excavation",
    description: "Precise land preparation for residential and commercial projects using state-of-the-art machinery.",
    shortDescription: "Professional excavation services for any project scale",
    icon: Construction,
    image:  "/images/maquina1.webp",
    alt: "Excavation machinery at work",
    details: "Our excavation services include site preparation, grading, trenching, and foundation work. We use GPS-guided equipment for maximum precision and efficiency.",
    features: [
      "Precision grading and leveling",
      "Foundation preparation",
      "Site development",
      "Earthmoving services",
      "Bulk excavation"
    ],
    benefits: [
      "Increased project accuracy",
      "Reduced labor costs",
      "Faster completion times",
      "Minimized environmental impact"
    ],
    stats: [
      { value: "50+", label: "Projects completed" },
      { value: "24/7", label: "Availability" },
      { value: "0.5-5m", label: "Depth capacity" }
    ],
    gallery: [
      "/images/maquina1.webp",
       "/images/maquina1.webp",
       "/images/maquina1.webp" 
      ],
    processSteps: [
      {
        title: "Site Evaluation",
        description: "Comprehensive assessment of soil conditions and project requirements"
      },
      {
        title: "Precision Marking",
        description: "GPS-guided layout for accurate excavation boundaries"
      },
      {
        title: "Controlled Excavation",
        description: "Phased digging with constant quality checks"
      }
    ]
  },
  {
    id: 2,
    title: "Demolition",
    slug: "demolition",
    description: "Safe and efficient removal of existing structures using specialized techniques.",
    shortDescription: "Controlled demolition for structures of all sizes",
    icon: Hammer,
    image: "/images/demolition.webp",
    alt: "Demolition process",
    details: "We offer selective and complete demolition services with a focus on safety, efficiency, and material recycling. Our team handles everything from small structures to commercial buildings.",
    features: [
      "Structural dismantling",
      "Interior demolition",
      "Concrete breaking",
      "Debris removal",
      "Asbestos abatement"
    ],
    benefits: [
      "90%+ material recycling rate",
      "Dust and noise control",
      "Neighborhood-friendly scheduling",
      "Complete site clearance"
    ],
    stats: [
      { value: "30+", label: "Buildings demolished" },
      { value: "100%", label: "Safety record" },
      { value: "1-7 days", label: "Typical project duration" }
    ],
    processSteps: [
      {
        title: "Safety Preparation",
        description: "Utility disconnection and hazard mitigation"
      },
      {
        title: "Strategic Demolition",
        description: "Methodical deconstruction from top to bottom"
      },
      {
        title: "Material Sorting",
        description: "On-site separation of recyclables and waste"
      }
    ]
  },
  // ... (other services with similar enhanced structure)
];
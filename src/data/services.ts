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
    image:  "/images/excavation.webp",
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
      "/images/maquinaria1.webp",
       "/images/maquinaria2.webp",
       "/images/maquinaria3.webp" 
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
    image: "/images/demolition1.webp",
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
  {
  id: 3,
  title: "Trenching",
  slug: "trenching",
  description: "Precision trenching services for utilities, drainage, and infrastructure projects.",
  shortDescription: "Accurate trench digging for utility installation",
  icon: ArrowDownWideNarrow,
  image: "/images/trenching1.webp",
  alt: "Trenching equipment digging precise trenches",
  details: "Our trenching services include utility line installation, drainage systems, and cable laying. We use specialized equipment to create clean, precise trenches with minimal surface disruption.",
  features: [
    "Utility trenching",
    "Drainage systems",
    "Cable and pipe laying",
    "Trench shoring",
    "Backfilling services"
  ],
  benefits: [
    "Precise depth control",
    "Minimal surface disruption",
    "Fast turnaround",
    "Reduced restoration costs"
  ],
  stats: [
    { value: "100+", label: "Linear miles trenched" },
    { value: "6-48\"", label: "Width range" },
    { value: "1-15'", label: "Depth capacity" }
  ],
  gallery: [
    "/images/trenching1.webp",
    "/images/trenching2.avif",
    "/images/trenching3.webp"
  ],
  processSteps: [
    {
      title: "Utility Mapping",
      description: "Locating existing underground utilities"
    },
    {
      title: "Precision Marking",
      description: "Laser-guided trench path layout"
    },
    {
      title: "Controlled Excavation",
      description: "Careful digging with spoil management"
    }
  ]
},
{
  id: 4,
  title: "Land Clearing",
  slug: "land-clearing",
  description: "Complete site preparation including tree removal, brush clearing, and land grading.",
  shortDescription: "Thorough site preparation for development",
  icon: LandPlot,
  image: "/images/landClearing.webp",
  alt: "Heavy equipment clearing land",
  details: "We provide comprehensive land clearing services to prepare sites for construction, agriculture, or landscaping. Our methods prioritize environmental responsibility while achieving complete site readiness.",
  features: [
    "Tree and stump removal",
    "Brush clearing",
    "Rock removal",
    "Topsoil preservation",
    "Site grading"
  ],
  benefits: [
    "Improved site accessibility",
    "Reduced fire hazards",
    "Enhanced property value",
    "Eco-friendly disposal options"
  ],
  stats: [
    { value: "200+", label: "Acres cleared" },
    { value: "95%", label: "Material recycled" },
    { value: "1-14", label: "Days per acre" }
  ],
  gallery: [
    "/images/landClearing1.webp",
    "/images/landClearing2.webp",
    "/images/landClearing3.webp"
  ],
  processSteps: [
    {
      title: "Site Assessment",
      description: "Evaluating vegetation and terrain challenges"
    },
    {
      title: "Selective Clearing",
      description: "Preserving valuable trees when possible"
    },
    {
      title: "Debris Management",
      description: "Chipping, hauling, or burning cleared material"
    }
  ]
},
{
  id: 5,
  title: "Water Supply",
  slug: "water-supply",
  description: "Installation and maintenance of water systems including wells, pumps, and distribution lines.",
  shortDescription: "Reliable water system installation and maintenance",
  icon: Droplet,
  image: "/images/water.webp",
  alt: "Water well drilling equipment",
  details: "Our water supply services cover everything from residential well drilling to commercial water system installation. We handle permits, drilling, pump installation, and system testing.",
  features: [
    "Well drilling",
    "Pump installation",
    "Water line trenching",
    "System testing",
    "Maintenance services"
  ],
  benefits: [
    "Access to clean water",
    "Reduced utility costs",
    "Increased property value",
    "Reliable water pressure"
  ],
  stats: [
    { value: "150+", label: "Wells drilled" },
    { value: "500+", label: "Systems installed" },
    { value: "100-1000", label: "Foot depth range" }
  ],
  gallery: [
    "/images/water.webp",
    "/images/water1.webp",
    "/images/water2.avif"
  ],
  processSteps: [
    {
      title: "Site Evaluation",
      description: "Water table assessment and permit acquisition"
    },
    {
      title: "System Design",
      description: "Determining optimal well location and system components"
    },
    {
      title: "Installation",
      description: "Professional drilling and equipment setup"
    }
  ]
}
];
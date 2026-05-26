import {
  FaPencilRuler,
  FaDraftingCompass,
  FaTools,
  FaCube,
} from "react-icons/fa";

const services = [
  {
    id: 1,

    slug: "interior-design",

    title: "Interior Design",

    icon: FaPencilRuler,

    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",

    description:
      "Premium interior design solutions crafted for Bangalore homes, apartments, and luxury residential spaces with elegant aesthetics and practical functionality.",

    benefits: [
      "Custom room layouts",
      "Premium material selection",
      "Luxury aesthetics",
    ],

    features: [
      "Space planning",
      "Furniture selection",
      "Material consultation",
    ],

    cta: "Explore Interior Solutions",
  },

  {
    id: 2,

    slug: "architecture-design",

    title: "Architecture Design",

    icon: FaDraftingCompass,

    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",

    description:
      "Innovative architectural concepts designed for modern residential and commercial spaces across Bangalore.",

    benefits: [
      "Space optimization",
      "Structural planning",
      "Modern design concepts",
    ],

    features: [
      "Blueprint development",
      "Site planning",
      "Concept design",
    ],

    cta: "Explore Architecture",
  },

  {
    id: 3,

    slug: "renovation",

    title: "Renovation",

    icon: FaTools,

    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",

    description:
      "Transform existing interiors into modern and elegant spaces with complete renovation services.",

    benefits: [
      "Interior remodeling",
      "Premium upgrades",
      "Improved functionality",
    ],

    features: [
      "Furniture upgrades",
      "Modern styling",
      "Design enhancements",
    ],

    cta: "View Renovation Plans",
  },

  {
    id: 4,

    slug: "3d-visualization",

    title: "3D Visualization",

    icon: FaCube,

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",

    description:
      "Experience realistic visual previews of interiors before project execution through advanced 3D rendering.",

    benefits: [
      "3D renders",
      "Design previews",
      "Interactive visualization",
    ],

    features: [
      "Virtual walkthrough",
      "Real-time rendering",
      "Presentation support",
    ],

    cta: "Explore Visual Concepts",
  },
];

export default services;
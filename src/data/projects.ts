
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "nestwell",
    title: "Nestwell",
    description: "Property and accommodation platform with listings, search, and booking-style flows.",
    longDescription:
      "Nestwell is a modern web application built to manage and explore property/accommodation listings with a clean, responsive user experience. It supports browsing and filtering listings, viewing detailed property pages, and a structured inquiry/booking flow designed for real-world usability.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "RESTful APIs",
      "SQL / MongoDB"
    ],
    features: [
      "Property listing grid with filters and search",
      "Detailed listing pages with image sections and key details",
      "Inquiry/booking-style flow with form validation",
      "Admin-ready structure for managing listings",
      "Mobile-friendly responsive UI"
    ],
    image: "/images/projects/nestwell/nestwell.png",
    demoUrl: "",
    githubUrl: "",
    category: "web"
  },

  {
    id: "dreamfit-lk",
    title: "DreamFit.LK - 3D Virtual Dressing Room",
    description: "Next-gen e-commerce platform with real-time 3D clothing customization and AI-generated designs.",
    longDescription:
      "DreamFit.LK is an immersive fashion e-commerce web application that lets users customize clothing in real time using an interactive 3D model. Customers can change colors, apply textures, upload logos, or generate unique designs using AI text prompts, then add the customized product to the cart and complete the purchase through a seamless checkout flow. The system is built with the MERN stack and leverages Three.js for real-time 3D visualization to deliver a modern, personalized shopping experience.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Three.js",
      "RESTful APIs"
    ],
    features: [
      "Real-time 3D preview and interaction powered by Three.js",
      "Color picker to customize outfits instantly",
      "Texture and logo upload for personalized designs",
      "AI-prompt based design/texture generation",
      "Add-to-cart and complete checkout flow",
      "User-friendly UI for customization and shopping"
    ],
    image: "/images/projects/dreamfit/dreamfit.png",
    demoUrl: "", // add your link
    githubUrl: "", // add your link
    category: "web"
  }
  ,
  {
    id: "ev-project",
    title: "EV Project",
    description: "Electric-vehicle focused system with data management and user-driven workflows.",
    longDescription:
      "An EV-focused application built to support practical user workflows such as exploring EV-related data, managing records, and presenting key information through a clean UI. The system is designed with a structured backend and database layer to handle scalable data operations and future feature expansion.",
    technologies: [
      "React.js / Next.js",
      "Node.js / Express.js",
      "Spring Boot",
      "SQL (MySQL/PostgreSQL)",
      "RESTful APIs"
    ],
    features: [
      "Structured CRUD operations with validation",
      "Database-backed records and history",
      "Clean UI for viewing and managing entries",
      "Role-ready design for admin/user separation",
      "REST API architecture for easy integration"
    ],
    image: "/images/projects/ev/ev.png",
    demoUrl: "",
    githubUrl: "",
    category: "web"
  },
  {
    id: "helasuwa",
    title: "Helasuwa",
    description: "Sri Lanka-focused healthcare platform for services, appointments, and patient support flows.",
    longDescription:
      "Helasuwa is a healthcare-oriented web application designed to streamline service discovery and patient support workflows. It includes user-friendly navigation, service pages, and structured forms to support appointments or inquiries, with a scalable backend and database design for future extensions.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js / Spring Boot",
      "RESTful APIs",
      "SQL / MongoDB"
    ],
    features: [
      "Service browsing with clear categorization",
      "Appointment/inquiry flow with validation",
      "Responsive UI and accessible layouts",
      "Backend-ready structure for records and management",
      "Clean component-based architecture"
    ],
    image: "/images/projects/helasuwa/helasuwa.png",
    demoUrl: "",
    githubUrl: "",
    category: "web"
  },

  
];
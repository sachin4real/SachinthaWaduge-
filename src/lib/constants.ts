// App constants

export const SITE_CONFIG = {
  name: "Sachintha Waduge",
  description: "Full-stack Developer | Tech Enthusiast",
  url: "https://.vercel.app",
  ogImage: "/images/manan/og-image.png",
  links: {
    email: "isurusachin123@gmail.com",
    github: "https://github.com/sachin4real",
    linkedin: "https://www.linkedin.com/in/sachintha-waduge-51207b318/",
    phone: "+94 768965223"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
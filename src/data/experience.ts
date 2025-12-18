
export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type?: "internship" | "part-time" | "full-time";
}

export const experienceData: Experience[] = [
  {
    id: "Uvexzon",
    company: "Uvexzon (pvt) Ltd",
    role: "Software Engineer Intern",
    duration: "April 2025 - Nov 2025",
    location: "Havlock, Sri Lanka",
    description: "During my internship, I contributed to the development and enhancement of web applications by delivering responsive front-end interfaces, implementing back-end services and APIs, and working with both SQL and MongoDB for data management. I built features using React, Next.js, Node.js/Express.js, and Spring Boot, collaborated through Git-based workflows in an Agile/Scrum environment, and supported releases through debugging, testing, performance improvements, and clear technical documentation..",
    achievements: [

    ],
    technologies: ["Mongodb", "Postman", "Node.js", "React", "Agile/Scrum" ,"Git" , "SQL" , "Figma"],
    type: "internship"
  },
  {
    id: "Freelance",
    company: "Freelance",
    role: "FullStack Developer",
    duration: "June 2025 - Present",
    location: " Sri Lanka",
    description: "As a freelance developer, I deliver end-to-end web solutions by gathering requirements, designing and building responsive UIs, developing secure back-end APIs, and integrating SQL/MongoDB databases. I manage the full delivery cycle independently—planning milestones, communicating progress with clients, deploying updates, and providing ongoing maintenance—using modern stacks such as Next.js/React, Node.js/Express, and Spring Boot, with a strong focus on performance, reliability, and clean documentation.",
    achievements: [
      
    ],
    technologies: ["Mongodb", "Postman", "Node.js", "React" ,"Git" , "SQL" , "Figma"],
    type: "part-time"
  }
];
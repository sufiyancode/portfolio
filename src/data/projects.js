import project1Image from "../assets/project1.png";

export const projects = [
  {
    title: "Google Developer Groups (GDG) Pune",
    type: "Collaboration",
    description: "Official website development and job portal platform",
    details: [
      "Developed and maintained GDG's official website using Next.js",
      "Created Pune Job Portal Platform for efficient job referrals",
      "Implemented email notification system",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Sequelize ORM",
      "CI/CD",
    ],
    link: "https://devfest.gdgpune.in/",
  },
  {
    title: "Product Comparison Platform",
    type: "Freelance",
    description: "Real-time chat enabled comparison platform",
    details: [
      "Implemented Socket.io and Redis for optimized communication",
      "Built scalable backend APIs using Node.js and Express.js",
      "Managed complex data relationships using PostgreSQL",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.io",
    ],
    image: project1Image,
  },
];

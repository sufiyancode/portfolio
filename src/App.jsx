import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import project1Image from "./assets/project1.png";
import project2Image from "./assets/project2.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const experiences = [
    {
      title: "Software Engineer Trainee",
      company: "The Data Tech Labs Inc.",
      duration: "March 2024 – September 2024",
      projects: [
        {
          name: "Marketing Automation Platform (MAAS)",
          points: [
            "Built a campaign scheduling dashboard for managing Email, WhatsApp, Instagram, and Facebook campaigns",
            "Created a real-time analytics dashboard, improving client efficiency by 30% through automated workflows",
            "Implemented scalable task queue management using Celery and RabbitMQ",
          ],
        },
        {
          name: "University As A Service (DG Campus - UAAS)",
          points: [
            "Built a student credit tracking system for academic and extracurricular activities",
            "Developed a platform connecting students, teachers, and placement officers",
            "Created an automated notification system for academic updates",
          ],
        },
      ],
    },
  ];

  const projects = [
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Shaikh Sufiyan
            </span>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="hover:text-purple-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400"
              >
                About
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Hi, I'm Sufiyan
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            A Software Engineer specializing in full-stack development with
            expertise in React.js, Django, and Node.js
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="mailto:sksufiyan9860@gmail.com"
              className="px-6 py-3 border border-purple-600 rounded-full hover:bg-purple-600/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm a Bachelor of Engineering student in Electronics and
              Telecommunication at Bharati Vidyapeeth's College of Engineering,
              Pune, pursuing my degree from 2021 to 2025.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-2">
                  <p>
                    <span className="text-purple-400">Languages:</span> Python,
                    Java, JavaScript
                  </p>
                  <p>
                    <span className="text-purple-400">Web Technologies:</span>{" "}
                    React.js, Node.js, Express.js, Next.js, Flask, Django
                  </p>
                  <p>
                    <span className="text-purple-400">Databases:</span> MongoDB,
                    PostgreSQL, MySQL, Redis
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Core Competencies
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="text-purple-400">Developer Tools:</span>{" "}
                    Git, VS Code, PyCharm, IntelliJ IDEA
                  </p>
                  <p>
                    <span className="text-purple-400">Other Skills:</span> DSA,
                    OOPs, REST APIs, Socket.io, OAuth2, JWT
                  </p>
                  <p>
                    <span className="text-purple-400">Core Concepts:</span>{" "}
                    Networking, Operating Systems, DBMS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 mb-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple-400">
                {exp.title}
              </h3>
              <p className="text-gray-400">
                {exp.company} | {exp.duration}
              </p>
            </div>
            <div className="space-y-6">
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex} className="bg-gray-900/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">{project.name}</h4>
                  <ul className="space-y-2">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-600/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300"
                  >
                    View Project <ExternalLink className="ml-2" size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/sufiyancode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sufiyan-shaikh22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sksufiyan9860@gmail.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;

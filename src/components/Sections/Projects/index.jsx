import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;

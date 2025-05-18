// Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';

const Projects = () => {
  return (
    <section id='projects' className='py-8 md:py-16 px-4 md:px-6'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

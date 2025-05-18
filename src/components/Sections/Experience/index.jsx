import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../../data/experiences';

const Experience = () => {
  return (
    <section id='experience' className='py-8 md:py-16 px-4 md:px-6'>
      <div className='container mx-auto max-w-4xl'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8'>
          Work Experience
        </h2>
        <div className='space-y-3 md:space-y-6'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

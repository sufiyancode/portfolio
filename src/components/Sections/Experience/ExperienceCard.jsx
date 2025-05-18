import React from 'react';
const ExperienceCard = ({ experience }) => (
  <div className='bg-gray-800/50 backdrop-blur-md rounded-xl p-8 mb-8'>
    <div className='mb-6'>
      <h3 className='text-2xl font-bold text-purple-400'>{experience.title}</h3>
      <p className='text-gray-400'>
        {experience.company} | {experience.duration}
      </p>
    </div>
    <div className='space-y-6'>
      {experience.projects.map((project, index) => (
        <div key={index} className='bg-gray-900/50 rounded-lg p-6'>
          <h4 className='text-xl font-semibold mb-4'>{project.name}</h4>
          <ul className='space-y-2'>
            {project.points.map((point, pointIndex) => (
              <li key={pointIndex} className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceCard;

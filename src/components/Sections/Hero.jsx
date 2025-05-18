import React from 'react';
import Button from '../Shared/Button';

const CallToAction = () => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sksufiyan9860@gmail.com&su=Let's%20Work%20Together!&body=Hi%20Sufiyan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20really%20impressed.%20I%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.%20Please%20let%20me%20know%20when%20you're%20available.%0A%0ABest%20regards%2C%0A[Your%20Name]`;
  return (
    <div className='flex space-x-4'>
      <Button href='#projects' variant='primary'>
        View Projects
      </Button>
      <Button
        as='a'
        href={gmailLink}
        target='_blank'
        rel='noopener noreferrer'
        variant='secondary'
      >
        Contact Me
      </Button>
    </div>
  );
};

const Hero = () => (
  <section className='pt-24 md:pt-32 pb-10 md:pb-20 px-4 max-w-7xl mx-auto'>
    <div className='max-w-3xl'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
        Hi, I'm Sufiyan
      </h1>
      <p className='text-lg md:text-xl text-gray-400 mb-6 md:mb-8'>
        A Software Engineer specializing in full-stack development with
        expertise in React.js, Django, and Node.js
      </p>
      <CallToAction />
    </div>
  </section>
);

export default Hero;

import React from 'react';

const CallToAction = () => {
  return (
    <section
      id='call-to-action'
      className='py-10 md:py-16 px-4 max-w-7xl mx-auto'
    >
      <div className='bg-gray-900 rounded-lg p-6 md:p-8 border border-gray-800'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>
            Ready to Transform Your Digital Vision?
          </h2>
          <p className='text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto'>
            Whether you need a robust SaaS solution or expert freelance
            development, I'm here to bring your ideas to life with cutting-edge
            technology and professional expertise.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto'>
            <div className='bg-gray-800 p-4 md:p-6 rounded-lg'>
              <h3 className='text-lg md:text-xl font-semibold text-purple-400 mb-2 md:mb-3'>
                SaaS Development
              </h3>
              <p className='text-gray-300 mb-4 md:mb-5'>
                Looking to build a scalable SaaS product that solves real
                business problems?
              </p>
              <a
                href='#contact'
                className='inline-block px-5 py-2 md:px-6 md:py-2.5 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md transition-colors'
              >
                Start Your SaaS Journey
              </a>
            </div>

            <div className='bg-gray-800 p-4 md:p-6 rounded-lg'>
              <h3 className='text-lg md:text-xl font-semibold text-pink-400 mb-2 md:mb-3'>
                Freelance Projects
              </h3>
              <p className='text-gray-300 mb-4 md:mb-5'>
                Need expert development help for your next web or mobile
                project?
              </p>
              <a
                href='#contact'
                className='inline-block px-5 py-2 md:px-6 md:py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md transition-colors'
              >
                Hire Me For Your Project
              </a>
            </div>
          </div>

          <div className='mt-6 md:mt-10 text-gray-400'>
            <p className='font-medium'>
              Not sure what you need? Let's discuss your requirements.
            </p>
            <a
              href='#contact'
              className='inline-block mt-2 md:mt-3 text-purple-400 hover:text-purple-300'
            >
              Schedule a consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React from 'react';
import SocialLinks from '../Shared/SocialLinks';

const Contact = () => {
  return (
    <section id='contact' className='py-10 md:py-20 px-4 max-w-7xl mx-auto'>
      <div className='text-center mb-6 md:mb-10'>
        <h2 className='text-2xl md:text-3xl font-bold mb-3 md:mb-4'>
          Get In Touch
        </h2>
        <p className='text-gray-300 max-w-2xl mx-auto'>
          Interested in working together? Whether you're looking for a SaaS
          solution or need freelance development expertise, I'm ready to help
          bring your ideas to life.
        </p>
      </div>

      <div className='max-w-md mx-auto bg-gray-800 rounded-lg p-4 md:p-6 mb-6 md:mb-12'>
        <form className='space-y-3 md:space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-300 mb-1'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Your name'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300 mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='your.email@example.com'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-300 mb-1'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={3}
              className='w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Tell me about your project...'
            ></textarea>
          </div>

          <div>
            <button
              type='submit'
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className='text-center'>
        <p className='text-gray-300 mb-3 md:mb-4'>
          Or connect with me directly:
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Contact;

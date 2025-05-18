import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import SocialLinks from '../Shared/SocialLinks';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setShowModal(true);
          e.target.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setErrorMsg('Oops… something went wrong. Please try again later or contact me directly.');
          setShowError(true);
        }
      );
  };

  return (
    <>
      <section id='contact' className='py-10 md:py-20 px-4 max-w-7xl mx-auto'>
        <div className='text-center mb-6 md:mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold mb-3 md:mb-4'>
            Get In Touch
          </h2>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            Interested in working together? Whether you’re looking for a SaaS
            solution or need freelance development expertise, I’m ready to help
            bring your ideas to life.
          </p>
        </div>

        <div className='max-w-md mx-auto bg-gray-800 rounded-lg p-4 md:p-6 mb-6 md:mb-12'>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='space-y-3 md:space-y-4'
          >
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
                name='user_name'
                className='w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='Your name'
                required
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
                name='user_email'
                className='w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='your.email@example.com'
                required
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
                name='user_message'
                rows={3}
                className='w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='Tell me about your project...'
                required
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

      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60'>
          <div className='bg-gray-900 rounded-xl shadow-lg p-8 max-w-sm w-full text-center border-2 border-purple-600 animate-fade-in'>
            <h3 className='text-2xl font-bold text-purple-400 mb-2'>
              Thank You! 🎉
            </h3>
            <p className='text-gray-200 mb-4'>
              Your message has been sent successfully.
              <br />
              I'll get back to you soon!
            </p>
            <button
              className='mt-2 px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors'
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showError && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60'>
          <div className='bg-gray-900 rounded-xl shadow-lg p-8 max-w-sm w-full text-center border-2 border-pink-600 animate-fade-in'>
            <h3 className='text-2xl font-bold text-pink-400 mb-2'>
              Something Went Wrong 😢
            </h3>
            <p className='text-gray-200 mb-4'>{errorMsg}</p>
            <button
              className='mt-2 px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold transition-colors'
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

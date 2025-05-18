import React from 'react';

const Offerings = () => {
  const saasOfferings = [
    {
      title: 'Enterprise SaaS Solutions',
      description:
        'Custom enterprise-level applications with scalable architecture and modern UI/UX.',
      features: [
        'Cloud-native architecture',
        'Multi-tenant support',
        'Enterprise security',
        'Custom integrations',
      ],
    },
    {
      title: 'Web Application Development',
      description:
        'Full-stack web applications built with React.js, Node.js, and modern frameworks.',
      features: [
        'Responsive design',
        'API development',
        'Database optimization',
        'Performance tuning',
      ],
    },
    {
      title: 'Marketplace Platforms',
      description:
        'Connect businesses and customers with custom marketplace solutions.',
      features: [
        'User management',
        'Payment processing',
        'Analytics dashboard',
        'Rating systems',
      ],
    },
  ];

  const freelanceServices = [
    {
      title: 'Technical Consultation',
      description:
        'Expert advice on architecture, technology stack, and implementation strategies.',
      features: [
        'Architecture review',
        'Stack selection',
        'Performance optimization',
        'Code quality assessment',
      ],
    },
    {
      title: 'Custom Development',
      description: 'Tailored development services for businesses and startups.',
      features: [
        'Full-stack development',
        'API integration',
        'Database design',
        'Frontend UI/UX',
      ],
    },
    {
      title: 'Code Refactoring',
      description:
        'Improve existing codebases for better performance and maintainability.',
      features: [
        'Technical debt reduction',
        'Architecture improvements',
        'Performance optimization',
        'Documentation',
      ],
    },
  ];

  return (
    <section
      id='offerings'
      className='py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'
    >
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-purple-400 mb-4'>
          My Offerings
        </h2>
        <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
          From enterprise SaaS solutions to specialized freelance services, I
          deliver high-quality software that solves real business problems.
        </p>
      </div>

      <div className='mb-16'>
        <h3 className='text-2xl font-semibold text-white mb-8 border-b border-gray-700 pb-2'>
          SaaS Products
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {saasOfferings.map((offering, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition duration-300'
            >
              <h4 className='text-xl font-semibold text-purple-300 mb-3'>
                {offering.title}
              </h4>
              <p className='text-gray-300 mb-4'>{offering.description}</p>
              <ul className='text-gray-400 space-y-1'>
                {offering.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-2xl font-semibold text-white mb-8 border-b border-gray-700 pb-2'>
          Freelance Services
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {freelanceServices.map((service, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition duration-300'
            >
              <h4 className='text-xl font-semibold text-purple-300 mb-3'>
                {service.title}
              </h4>
              <p className='text-gray-300 mb-4'>{service.description}</p>
              <ul className='text-gray-400 space-y-1'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-12 text-center'>
        <a
          href='#contact'
          className='inline-block px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity'
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
};

export default Offerings;

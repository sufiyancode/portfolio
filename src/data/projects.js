import project1Image from '../assets/project1.png';
import thisVersusImage from '../assets/project1.png';
import theEndorseImage from '../assets/project1.png';
// import project1Image from '../assets/project1.png';

export const projects = [
  {
    title: 'ThisVersus – Car Comparison Platform',
    type: 'Freelance',
    description: 'Compare cars and chat with nearby dealers in real time',
    details: [
      'Integrated CometChat for real-time user-dealer conversations',
      'Built backend with Node.js and Express.js to manage vehicle data',
      'Designed an intuitive UI for car comparison and dealer discovery',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'CometChat',
    ],
    image: thisVersusImage,
    link: 'https://frontend-three-wine-44.vercel.app/',
  },
  {
    title: 'TheEndorse – Referral-Based Hiring Platform',
    type: 'Freelance',
    description: 'Job referrals made easy through a two-way interaction system',
    details: [
      'Built dual-role flows for Endorsers and Endorsees',
      'Developed secure backend for referral tracking and job management',
      'Implemented dynamic role-based frontend using React.js',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    image: theEndorseImage,
    link: 'https://theendorse.com/',
  },
  {
    title: 'Google Developer Groups (GDG) Pune',
    type: 'Collaboration',
    description: 'Official website development and job portal platform',
    details: [
      "Developed and maintained GDG's official website using Next.js",
      'Created Pune Job Portal Platform for efficient job referrals',
      'Implemented email notification system',
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Sequelize ORM',
      'CI/CD',
    ],
    link: 'https://devfest.gdgpune.in/',
  },
];

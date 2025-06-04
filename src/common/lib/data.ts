import React from 'react';

// import campwithusImg from '@/../public/images/camp-with-us.png';
// import carcatalogImg from '@/../public/images/car-catalog.png';
// import filedriveImg from '@/../public/images/file-drive.png';
// import projectmanagementImg from '@/../public/images/project-management.png';
// import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import barksAndWhiskers from '@/../public/images/barks-and-whiskers.jpg';
import speech2Sign from '@/../public/images/speech-2-sign.png';
import sign2Speech from '@/../public/images/sign-2-speech.png';
import dreamPixel from '@/../public/images/dreampixel.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Academics',
    id: 'academics',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  // {
  //   name: 'Experience',
  //   id: 'experience',
  // },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const academicsData = [
  {
    title: 'Jaypee Institute of Information Technology',
    location: 'Noida, Uttar Pradesh, India',
    description: `B.Tech in Computer Science and Engineering (CSE). 
    [Relevant Coursework]: Database Systems, Data Structures, Algorithms & Problem Solving, Operating Systems, Machine Learning, Deep Learning, NLP, Probability and Statistics, Computer Organisation and Architecture, Software Engineering, Computer Networks & IoT, Big Data Ingestion, Front End Programming, Cryptography & Network Security, Digital Forensics & Cyber Security.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2021 - Present',
  },
  {
    title: 'Ramjas School',
    location: 'Anand Parbat, Delhi, India',
    description: 'High School Diploma in Science with Mathematics and Computer Science.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'July 2018 - July 2021',
  },
] as const;

export const experiencesData = [
  {
    title: '',
    location: '',
    description:
      '',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '',
  },
] as const;

// export const images = {
//   campwithusImg,
//   carcatalogImg,
//   filedriveImg,
//   projectmanagementImg,
//   reactfoodImg,
// };

export const projectsData = [
  {
    title: 'Barks & Whiskers',
    description: `Barks and Whiskers is a pet adoption and rehoming platform that connects pet seekers with owners. It simplifies listing, discovery, and adoption using real-time data, user authentication, and smart filtering.`,
    tags: ['React.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Firebase Auth', 'Google OAuth'],
    imageUrl: barksAndWhiskers,
    link: 'https://barks-and-whiskers.onrender.com/',
  },
  {
    title: 'Sign 2 Speech',
    description:
      'It is a platform designed to recognize Indian Sign Language gestures using computer vision and machine learning. It facilitates real-time hand gesture interpretation, aiding communication for the hearing and speech impaired.',
    tags: ['Python', 'OpenCV', 'Mediapipe', 'gTTS', 'Hand Tracking', 'Computer Vision'],
    imageUrl: sign2Speech,
    link: 'https://github.com/priyanshkh14/ISL-project',
  },
  {
    title: 'Speech 2 Sign',
    description:
      'It is a platform that converts sign language gestures into spoken audio across multiple Indian languages. Implements NLP techniques and 3D gesture with Blender to enable real-timecommunication for the hearing-impaired.',
    tags: [
      'Python',
      'OpenCV',
      'Blender',
      'gTTS',
      'Google Translate API',
      'NLP',
      'Multilingual'
    ],
    imageUrl: speech2Sign,
    link: 'https://github.com/priyanshkh14/audio-sign-to-speech',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/priyanshkh14/portfolio-website',
  },

  {
    title: 'AI Image Generator',
    description:'GenAI is a modern web-based AI platform that leverages OpenAI GPT and DALL·E models to generate human-like text and images, offering a seamless and intuitive user interface for creative content generation.',
    tags: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'GPT-4', 'DALL·E', 'TypeScript'],
    imageUrl: dreamPixel,
    link: 'https://github.com/priyanshkh14/ai-image-gen',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Python', '/svgs/python-svgrepo-com.svg'],
  ['Scikit-learn', '/svgs/scikit-learn.svg'],
  ['TensorFlow', '/svgs/TensorFlow.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Matplotlib', '/svgs/Matplotlib.svg'],
  ['Pandas', '/svgs/Pandas.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Numpy', '/svgs/numpy-svgrepo-com.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;

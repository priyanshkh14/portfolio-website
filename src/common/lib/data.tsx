import React from 'react';

// import campwithusImg from '@/../public/images/camp-with-us.png';
// import carcatalogImg from '@/../public/images/car-catalog.png';
// import filedriveImg from '@/../public/images/file-drive.png';
// import projectmanagementImg from '@/../public/images/project-management.png';
// import reactfoodImg from '@/../public/images/react-food.png';
// import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import barksAndWhiskers from '@/../public/images/barks-and-whiskers.jpg';
import speech2Sign from '@/../public/images/speech-2-sign.png';
import sign2Speech from '@/../public/images/sign-2-speech.png';
import dreamPixel from '@/../public/images/dreampixel.png';
import { GraduationCap, Building2 } from 'lucide-react';
import { FaApple } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';

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
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Academics',
    id: 'academics',
  },
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
    icon: React.createElement(GraduationCap),
    date: 'Aug 2021 - July 2025',
  },
  {
    title: 'Ramjas School',
    location: 'Anand Parbat, Delhi, India',
    description: 'High School Diploma in Science with Mathematics and Computer Science.',
    icon: React.createElement(GraduationCap),
    date: 'July 2018 - July 2021',
  },
] as const;

export const experiencesData = [
  {
    title: 'Ruaa Ventures Private Limited',
    role: 'Full Stack Software Engineer',
    location: 'Bengaluru, India',
    description: (
      <div className="flex flex-col gap-6 mt-2">
        <div>
          <div className="flex items-center gap-3 mb-2 font-semibold text-gray-900 dark:text-gray-100 italic">
            Kanoon: LegalTech Platform
            <div className="flex items-center gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.ruaa2458.kanoon" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <AiFillAndroid className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              </a>
              <a href="https://apps.apple.com/in/app/kanoon/id6748016874" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <FaApple className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              </a>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Designed and owned the end-to-end mobile architecture for Android and iOS using React Native and Expo. I implemented JWT-based authentication, role-based access control, and streamlined onboarding workflows, supporting 500+ active users and 1,000+ verified lawyers in production. By delivering real-time push notifications and a multi-parameter legal discovery engine (filtering by case type, jurisdiction, and status), I improved user engagement and retention by 40–45%. Furthermore, I built RESTful APIs with Django and refined the MySQL schema and indexing, successfully reducing average API response times by 35–40%.
          </p>
        </div>

        <div>
          <div className="mb-2 font-semibold text-gray-900 dark:text-gray-100 italic">Tareek: Legal Case Lifecycle Management</div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Architected and delivered a full-scale Case Lifecycle Management (CLM) platform, digitizing end-to-end legal operations from case creation to closure with a 99.9% crash-free session rate. I built a high-throughput PostgreSQL backend using the Django REST Framework, applying strategic indexing and query optimization to reduce API latency by 45% under real-world workloads. Additionally, I implemented secure payment and automation flows via Razorpay integration and event-driven status updates, significantly improving operational reliability and reducing manual intervention.
          </p>
        </div>
      </div>
    ),
    icon: React.createElement(Building2),
    date: 'June 2025 - Present',
    skills: 'React Native, Expo, Ant Design, React.js, Tailwind CSS, PostgreSQL, MySQL, Python, Django, DRF, Git',
  },
  {
    title: 'Jaypee Institute of Information Technology',
    role: 'Research & Development Intern',
    location: 'Noida, India (Hybrid)',
    description: 'Research Intern. Developed CNN-based pipelines with CUDA for mammogram analysis, achieving 95%+ accuracy and 12% improvement over baselines; deployed on GPUs/HPCs, cutting training time by 40% and scaling to 100+ GB data.',
    icon: React.createElement(Building2),
    date: 'June 2024 - July 2024',
    skills: 'Python, PyTorch, CUDA, CNNs, Mammogram Analysis, HPC'
  },
  {
    title: 'Coding Blocks',
    role: 'Teaching Assistant',
    location: 'New Delhi, India (Hybrid)',
    description: 'Delivered DSA lectures to 200+ students in online/offline modes, created 100+ worksheets and coding challenges, and led 10+ interactive sessions weekly to boost engagement and hands-on learning.',
    icon: React.createElement(Building2),
    date: 'September 2023 - March 2024',
    skills: 'C++, Data Structures, Algorithms, Teaching, Communication',
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
    description: 'GenAI is a modern web-based AI platform that leverages OpenAI GPT and DALL·E models to generate human-like text and images, offering a seamless and intuitive user interface for creative content generation.',
    tags: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'GPT-4', 'DALL·E', 'TypeScript'],
    imageUrl: dreamPixel,
    link: 'https://github.com/priyanshkh14/ai-image-gen',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['React-Native', '/svgs/react.svg'],
  ['Ant-Design', '/svgs/ant-design.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Python', '/svgs/python-svgrepo-com.svg'],
  ['Scikit-learn', '/svgs/scikit-learn.svg'],
  ['TensorFlow', '/svgs/TensorFlow.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Matplotlib', '/svgs/Matplotlib.svg'],
  ['Pandas', '/svgs/Pandas.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Django', '/svgs/django.svg'],
  ['Expo', '/svgs/expo.svg'],
  // ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
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
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  // ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;

//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin
} from 'react-icons/fi';

import {FaDiscord} from 'react-icons/fa'

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/htmlcss.png';
import SkillImg2 from './assets/img/skills/tailwind.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/django.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
import {SiDiscord} from "react-icons/si";
import {AiFillApi} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube size={25} />,
    href: 'https://www.youtube.com/c/PratishLamichhane',
  },
  {
    icon: <FiInstagram size={20}  />,
    href: 'https://www.instagram.com/pratishlmc',
  },
  {
    icon: <FiGithub size={20}  />,
    href: 'https://www.github.com/pratishlmc',
  },
  {
    icon: <SiDiscord size={20}  />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Design',
    description:
      'Intuitive UI/UX, dynamic design with smooth user interface, I can provide you with both the design and the frontend.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'With the best technologies I build full fledged web and native mobile applications. With the client preferred stack I provide the best experience.',
  },
  {
    icon: <AiFillApi />,
    name: 'Custom API',
    description:
      'With the given data I create a minimal and easy to use API. With attractive Documentation and fast calls it will help the business in data sharing.',
  },
  {
    icon: <BiSupport />,
    name: '24/7 Support',
    description:
      'Whenever you need any short of help or recommendation over anything I am always here for you. I believe that our communication can bring improvements in the work.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have Questions?',
    subtitle: 'Email me at',
    description: 'pratishlmc@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Kathmandu, Nepal',
    description: 'Serving clients worldwide',
  },
];

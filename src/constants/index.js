import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freelance,
  kenrow,
  sass,
  elementor,
  aisum,
  kenrowshot,
  internet,
  linkedinme,
  emailme,
  quizwiz,
  githubblack,
  ecommerce,
  shades
} from "../assets";

export const navLinks = [
  {
    id: "service",
    title: "Service",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const mysocials =[
  {
    image: githubblack,
    source_code_link: "https://github.com/Devlouiz",
  },
  {
    image: linkedinme,
    source_code_link: "https://www.linkedin.com/in/louis-onyedikachi-8557651b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_meduim=android_app",
  },
  {
    image: emailme,
    source_code_link: "mailto:louisonyedi@gmail.com",
  }
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Designer",
    icon: creator,
  },
  {
    title: "Junior Construction Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "elementor",
    icon: elementor,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Kenrow Digital Marketing Agency",
    icon: kenrow,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Software Developer & Wordpress Designer",
    company_name: "Upwork, Fiverr & LinkedIn(freelancing)",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "A freelancer Wordpress Designer on Upwork crafting visually stunning and responsive website seamlessly intergrating Wordpress for diverse client requirement."
    ],
  },
  {
    title: "Junior Construction Supervisor",
    company_name: "Kemailz Consult(Small-Scale Construction Firm)",
    //icon: "",//shopify,
    iconBg: "#E6DEDD",
    date: "July 2023 - Feb 2023",
    points: [
      "Successfully executed various construction tasks including (deliveries of construction materials)",
      "Collaborated with the Contract engineer, Bricklayer and Ironworker for timely project completion within planned budget"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SummBuddy",
    description:
      "Web-based application that allows users to summarize lengthy article or blog post with AI simply by providing the url link to the article or post",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aisum,
    source_code_link: "https://github.com/Devlouiz/AI-SummarizerApp",
  },
  {
    name: "Kenrow DMA",
    description:
      "Kenrow Digital Marketing Agency, your comprehensive solution for a dynamic online presence, empowering your business to navigate the digital landscape with unparalleled speed and precision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: kenrowshot,
    source_code_link: "https://www.kenrow.online/",
  },
  {
    name: "Quiz Wiz",
    description:
      "leveraging the use open trivia robust api to create an interactive Quiz App.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "open trivia API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quizwiz,
    source_code_link: "https://github.com/Devlouiz/QuizWiz",
  },
  {
    name: "LoudKicks",
    description:
      "With the help of Sanity.io's headless CMS , I was able to develop a simple ecommerce system intergrated with Paystack payment gateway API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity headless CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://ecommerce-test-liard-mu.vercel.app",
  },
  {
    name: "Shades of Elegance",
    description:
      "Using WordPress Robust CMS , I was able to develop and design an Airport Taxi and Car Rentals website intergrated with a booking management system",
    tags: [
      {
        name: "WordPress CMS",
        color: "green-text-gradient",
      },
      {
        name: "Advanced Custom Fields",
        color: "blue-text-gradient",
      },
      {
        name: "SEO",
        color: "pink-text-gradient",
      },
    ],
    image: shades,
    source_code_link: "https://shadesofelegance.ng",
  },
];

export { services, technologies, experiences, testimonials, projects, mysocials };

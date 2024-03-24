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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
  }
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

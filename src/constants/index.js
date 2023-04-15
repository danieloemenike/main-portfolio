import {
  mobile,
  backend,
  creator,
  acme,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  threed,
  jobit,
  tripguide,
  linkup, titan, airbnb, fitfam
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
    id: "project",
    title: "Project"
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "TITAN TRUST BANK",
    icon: titan,
    iconBg: "#383E56",
    date: "- October 2021 - August 2022",
    points: [
      "Developing and maintaining web applications using Angular.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "LINK-UP EXCLUSIVE AUTOS",
    icon: linkup,
    iconBg: "#383E56",
    date: " March 2020 - December 2020",
    points: [
      "Documenting application changes, preparing updates, and releasing them periodically .",
      "Developing rich, engaging, and highly responsive user-facing interfaces and using custom components and Libraries",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "ACME BRANDS LIMITED",
    icon: acme,
    iconBg: "#E6DEDD",
    date: " Nov 2019 - Mar 2020",
    points: [
      "Converting visual designs, PSDs, and wireframes into working and efficient components, features, or pages on the user interface",
      "Optimizing component design and performance across an array of web-capable browsers and devices",
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
    name: "3D Clothing Design Website",
    description:
      "A 3D Clothing Design Website with OpenAi plugin integration.The website takes in input design and also fetches a logo design to use as a mockup on the shirt..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React3Fiber",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threed,
    source_code_link: "https://shirtdesign.onrender.com/",
  },
  {
    name: "Airbnb Clone",
    description:
      "This integrates the Calendar and Map Features when search is being implemented. Mock Json api data was used. ",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    
    ],
    image: airbnb,
    source_code_link: "https://airbnbproj.vercel.app/",
  },
  {
    name: "FitFam Inc",
    description:
      "A React App created for fitness enthusiasts",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitfam,
    source_code_link: "https://fitfam.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  mobile,
  backend,
  creator,
  link,
  web,
  javascript,
  typescript,
  html,
  css,
  cpp,
  reactjs,
  iOS,
  tailwind,
  nodejs,
  mongodb,
  ebay,
  git,
  angular,
  figma,
  python3,
  sql,
  docker,
  meta,
  elms,
  MSU,
  meditab,
  starbucks,
  tesla,
  shopify,
  airbnb,
  jobit,
  tripguide,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "iOS App Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "iOS",
    icon: iOS,
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
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"python3",
    icon:python3
  },
  {
    name:"sql",
    icon:sql
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Meditab Software INC",
    icon: meditab,
    iconBg: "#FFFFFF",
    date: "October 2022 - May 2023",
    points: [
      "Engineered responsive frontend views using Angular 11, achieving a flawless 100% responsiveness score.",
      "Enhanced document viewing capabilities by seamlessly integrating the ngx-extended-pdf-viewer library into the web application.",
      "Mitigated a critical parsing bug, reducing application crashes by 25% and boosting user satisfaction by 15%.",
      "Collaborated with senior engineers to enhance CX for 10,000+ customers, showcasing dedication to user satisfaction and loyalty.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "MSU Information Technology Labs",
    icon: MSU,
    iconBg: "#E6DEDD",
    date: "January 2022 - August 2022",
    points: [
      "Developed Ph.D. portal with user authentication for different types of users, frontend in AngularJS, backend in C#, Integrated multiple institutes\' Ph.D. programs, built comprehensive database in Microsoft SQL server",
      "Automated departmental and institute-wise reporting leveraging alaSQL and JavaScript, reducing manual report creation time by 40% for data-driven decisions.",
      "Attained 30% faster response time via indexed database and async programming, reducing latency and costs by 70%.",
      "Led strategic migration to an online data collection system, boosting data accessibility and affordability within the portal, achieved by minimizing paper usage by an impressive 90%.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "January 2022 - August 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Airbnb",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typecript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "orange-text-gradient",
      },
      
    ],
    image: airbnb,
    source_code_link: "https://airbnb-new-xi.vercel.app/",
  },
  {
    name: "ebay iOS App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "RESTful API",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS(ExpressJS)",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
     
      
    ],
    image: ebay,
    source_code_link: "https://drive.google.com/file/d/18UImGyDuaBFzMi5i_DnWk1ltsTrkco-h/view?pli=1",
  },
  {
    name: "Employee Leave Management System",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML/CSS/Javascript",
        color: "blue-text-gradient",
      },
      {
        name: ".NET(c#)",
        color: "green-text-gradient",
      },
      {
        name: "WebAPI",
        color: "pink-text-gradient",
      },
      {
        name: "MSSQL Server",
        color: "orange-text-gradient",
      },
    ],
    image: elms,
    source_code_link: "https://github.com/parth23p/EmployeeLeaveManagementSystem",
  },
];

export { services, technologies, experiences, testimonials, projects };

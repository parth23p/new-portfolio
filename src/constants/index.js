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
  python3,
  sql,
  elms,
  MSU,
  Panda,
  starbucks,
  tesla,
  shopify,
  airbnb,
  jobit,
  tripguide,
  logo2,
  FintrackPro,
  MBTI,
  redvest,
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
    title: "Software Engineer Intern",
    company_name: "Redvest",
    icon: redvest,
    iconBg: "#E6DEDD",
    date: "June 2024 - Augst 2024",
    points: [
      "Built product checkout page in React.", 
      "Integrated Stripe payment webhook for the products checkout.",
      "Deployed and designed database in firebase."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Panda Infosoft",
    icon: Panda,
    iconBg: "#FFFFFF",
    date: "July 2022 - June 2023",
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
    date: "January 2022 - June 2022",
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
     "Parth significantly improved operational efficiency by automating reports and enhancing user authentication, reducing manual effort by 40%.",
    name: "Rushil Choksi",
    designation: "Co-Founder",
    company: "técrave",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a Software Engineer who truly cares about their clients' success like Parth does.",
    name: "Pranav Patel",
    designation: "COO",
    company: "Panda Infosoft",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Parth optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Anya Ozmen",
    designation: "Tech Lead",
    company: "Redvest",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Rental Management",
    description:
      "The core functionality includes a responsive Next.js frontend for improved rendering, a location-based search with calendar integration and group customization, RESTful APIs for dynamic hotel details and images, and a 'My Airbnb' feature for users to manage listings as hosts.",
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
    name: "E-Commerce iOS App",
    description:
      "Developed an iOS app using SwiftUI and NodeJS/ExpressJS for real-time eBay API integration, deployed on GCP for scalability. Implemented robust user interactions, Facebook integration, and advanced features like Zip Code autocomplete and swipe-to-delete in favorites.",
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
    name: "Fintrack Pro",
    description:
     "Built a Finance SaaS Platform with Next.js, enhancing income/expense tracking and boosting user engagement by 40%. Implemented CSV import, customizable dashboard features, and secure transactions with Clerk authentication, Hono.js API, PostgreSQL, and Drizzle ORM for optimized performance.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "DrizzleORM",
        color: "pink-text-gradient",
      },
      // {
      //   name: "HonoJS",
      //   color: "orange-text-gradient",
      // },
    ],
    image: FintrackPro,
    source_code_link: "https://drive.google.com/file/d/1788VSva1CjXkfWftOr-5fzQFMzijZsa6/view?usp=sharing",
  },
  {
    name: "LeaveTrack",
    description:
     "Implemented user and admin roles with authentication in a web app, enabling streamlined leave applications with defined days and reasons. Revolutionized leave management system with administrative capabilities, reducing maintenance and improving efficiency by 90%.",
    tags: [
      {
        name: "HTML/CSS/JS",
        color: "blue-text-gradient",
      },
      {
        name: ".NET(c#)",
        color: "green-text-gradient",
      },
      // {
      //   name: "WebAPI",
      //   color: "pink-text-gradient",
      // },
      {
        name: "MSSQL Server",
        color: "orange-text-gradient",
      },
    ],
    image: elms,
    source_code_link: "https://github.com/parth23p/EmployeeLeaveManagementSystem",
  },
  {
    name: "Domain Expansion",
    description:"Developed synthetic data to identify MBTI traits using LLM prompts, trained PEM adapters for text generation and classification, and evaluated with human assessments and MBTI tests.",
    // "PEM as Building Blocks for Composite Generative Tasks:Created synthetic data to identify MBTI personality traits using self-engineered prompts on LLMs, trained PEM adapters for text generation and zero-shot classification on individual traits, and evaluated results through human assessments and MBTI tests.",
    tags: [
      {
        name: "LLM Finetuning",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Gen AI",
        color: "pink-text-gradient",
      },
      {
        name: "PEFT/LoRA/IA3",
        color: "orange-text-gradient",
      },
    ],
    image: MBTI,
    source_code_link: "https://docs.google.com/presentation/d/1qBNrpdaQ1QvnZsPkq3Bt0whAF_JyPgMrKQE9ywLShoQ/edit?usp=sharing",
  },

];

export { services, technologies, experiences, testimonials, projects };

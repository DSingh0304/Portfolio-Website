import dhanvantri from "../assets/dhanvantri.webp";
import streamify from "../assets/streamify.png";
import iiituna from "../assets/iiituna.webp";

export const bigProjects = [
  {
    id: "streamify",
    title: "Streamify",
    shortDesc: "A social media platform for chatting and videocall.",
    fullDesc:
      "The Video Chat Application is a full-stack web project that goes beyond just video calls. It is a comprehensive social platform built with React and Node.js that includes features for real-time video communication, direct messaging, and making friends. It is designed to be a unified space for users to connect and interact seamlessly.",
    tech: ["Node.js", "React.js", "Express.js", "MongoDB"],
    tags: ["restapi", "social-media", "video-chat", "chat-app"],
    repoUrl: "https://github.com/DSingh0304/VideoChatApplication",
    liveUrl: "https://videochatapplication-wvfk.onrender.com/login",
    createdAt: "Aug 2025",
    image: streamify,
    featured: true,
    smallProject: false,
  },
  {
    id: "dhanvantri-project",
    title: "Dhanvantri",
    shortDesc: "A unified healthcare web application for revolutionizing healthcare.",
    fullDesc:
      "Co-developed during a national-level hackathon, Dhanvantri is a unified healthcare web application. The platform was engineered to connect patients directly with medical professionals and included real-time telemedicine capabilities for virtual consultations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    tags: ["fullstack", "hackathon", "healthcare", "telemedicine"],
    repoUrl: "https://github.com/DSingh0304/dhanvantri.pages.io",
    liveUrl: null,
    image: dhanvantri,
    featured: true,
    createdAt: "Mar 2025",
    smallProject: false,
  },
  {
    id: "iiit-una-website",
    title: "IIIT Una Official Website",
    shortDesc: "Maintained and enhanced the official IIIT Una website.",
    fullDesc:
      "Played a key role in the maintenance of the official IIIT Una website. My responsibilities included ensuring high website availability and uptime, debugging and resolving critical technical issues, and implementing new features to enhance functionality. I also performed regular security patches and system updates, and collaborated on continuous performance improvement. This experience involved working on a full-stack application, ensuring the site remained secure, fast, and user-friendly.",
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    tags: ["fullstack", "maintenance", "collaboration", "website"],
    repoUrl: null,
    liveUrl: "https://iiitu.ac.in/",
    image: iiituna,
    featured: true,
    createdAt: "April 2025",
    smallProject: false,
  },
];

export const smallProject = [
  {
    id: "picture-search-engine",
    title: "Picture Search Engine",
    shortDesc: "A web application for searching images.",
    fullDesc:
      "A full-stack picture search engine application. The project uses a web API to fetch images based on user queries, allowing for a dynamic and interactive search experience. It features a clean, responsive front-end and a backend to handle API requests and data processing, demonstrating proficiency in both front-end and backend development.",
    tech: ["React.js", "Node.js", "API", "Express.js", "Tailwind CSS"],
    tags: ["fullstack", "search-engine", "api", "web"],
    repoUrl: "https://github.com/DSingh0304/Picture-Search-Engine",
    liveUrl: null,
    createdAt: "June 2024",
    featured: false,
    smallProject: true,
  },
  {
    id: "weathernow-app",
    title: "WeatherNow",
    shortDesc: "A real-time weather application.",
    fullDesc:
      "A dynamic weather application that provides real-time weather updates. The app utilizes a weather API to fetch and display current weather conditions, forecasts, and other relevant meteorological data for any location. It features a user-friendly interface that is both intuitive and visually appealing.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    tags: ["frontend", "api", "weather", "web"],
    repoUrl: "https://github.com/DSingh0304/WeatherNow",
    liveUrl: null,
    featured: false,
    createdAt: "November 2023",
    smallProject: true,
  },
  {
    id: "farmsync-project",
    title: "FarmSync",
    shortDesc: "A direct-to-consumer platform for farmers.",
    fullDesc:
      "FarmSync is a direct-to-consumer (D2C) platform designed to help farmers sell their produce directly. It features a user-facing marketplace where consumers can access fresh, locally-sourced goods. The project involved building and integrating APIs to manage product listings, user profiles, and transactions, all delivered as a functional prototype under strict time constraints.",
    tech: ["Node.js", "React.js", "Express.js", "MongoDB"],
    tags: ["fullstack", "ecommerce", "api", "teamwork"],
    repoUrl: "https://github.com/DSingh0304/FarmSync",
    liveUrl: null,
    createdAt: "Feb 2025",
    smallProject: false,
  },
  {
    id: "myntra-clone",
    title: "Myntra Clone",
    shortDesc: "A replica of the Myntra e-commerce website.",
    fullDesc:
      "A front-end clone of the popular e-commerce platform, Myntra, created for React practice. This project focuses on replicating the user interface, component structure, and user experience of a modern e-commerce site. It showcases proficiency in building complex layouts, managing component state, and using React for a dynamic and interactive web experience.",
    tech: ["React.js", "Tailwind CSS"],
    tags: ["frontend", "e-commerce", "react"],
    repoUrl: "https://github.com/DSingh0304/Myntra-Clone",
    liveUrl: null,
    featured: false,
    createdAt: "July 2024",
    smallProject: true,
  },
];

export const allTags = [
  "all",
  ...new Set([...bigProjects, ...smallProject].flatMap((p) => p.tags)),
];
export const allTech = [
  ...new Set([...bigProjects, ...smallProject].flatMap((p) => p.tech)),
];

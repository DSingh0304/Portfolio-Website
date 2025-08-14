import { profile2, prop1, prop2 } from "../assets/index.js";

export const about = {
  id: "about-me",
  intro: "Hello, I'm Deep!",
  desc1:
    "I'm Deep Shekhar Singh, a passionate and driven backend engineer with a strong focus on building robust and scalable systems. My experience in architecting and developing APIs, primarily with the MERN stack (MongoDB, Express.js, and Node.js), has allowed me to craft efficient and reliable solutions from the ground up.",
  desc2:
    "I thrive on solving complex problems and am deeply committed to creating clean, maintainable code. As a lifelong learner, I am always seeking new challenges and opportunities to expand my skills in backend development.",
  desc3:
    "I'm a passionate software developer with a strong competitive spirit, channeling my skills toward preparing for Google Summer of Code (GSOC) and participating in hackathons. My experience in these high-pressure, collaborative environments has sharpened my ability to quickly prototype innovative solutions, as demonstrated by my work on projects like Dhanvantri and FarmSync. With a solid foundation in the MERN stack and a constant drive to learn new technologies, I am always ready to tackle a challenge and build impactful, high-quality projects.",
  cta: {
    label: "Read More",
    to: "/about",
  },
  images: [
    {
      key: "prop1",
      alt: "Decorative dotted element",
      className: "absolute bottom-2 right-2",
      decorative: true,
    },
    {
      key: "profile",
      alt: "Portrait of Deep",
      className:
        "rounded-lg shadow-lg hover:scale-110 hover:cursor-pointer transition-transform duration-300",
      decorative: true,
    },
    {
      key: "prop2",
      alt: "Brand graphic",
      className: "",
      decorative: true,
    },
  ],
  imageMap: { prop1, profile2, prop2 },
};

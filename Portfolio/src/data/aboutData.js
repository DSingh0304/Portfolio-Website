import { profile2, prop1, prop2 } from "../assets/index.js";

export const about = {
  id: "about-me",
  intro: "Hello, I'm Deep!",
  desc1:
    "I'm Deep Shekhar Singh, a B.Tech Information Technology student at IIIT Una. I am a passionate Full Stack Developer and Open Source Contributor at the Apache Software Foundation, where I've contributed 13+ merged PRs to the APISIX Dashboard, strengthening cloud-scale platform reliability.",
  desc2:
    "My expertise lies in architecting production-grade systems, from financial ledger engines with full ACID compliance to automated hostel allocation platforms. I thrive in fast-paced environments, having worked on JWT-secured REST APIs and real-time WebSocket systems at Yes City and re-engineered high-performance interfaces at IIT Mandi.",
  desc3:
    "I'm a constant builder and lifelong learner, with a strong foundation in Distributed Systems, Data Structures, and DevOps. Beyond engineering, I've held leadership roles as the Head of Engineering for the ACM Student Chapter and have a competitive background as a state-level footballer. I am always looking for challenges that push the boundaries of technology and creativity.",
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

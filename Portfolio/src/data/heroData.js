import { profile, prop1, prop2 } from "../assets/index.js";

export const heroData = {
  id: "hero",
  headingLines: [
    { text: "Deep is a ", accent: false },
    { text: "software developer", accent: true },
    { text: " and ", accent: false },
    { text: "ML enthusiast", accent: true },
  ],
  subText: "He crafts responsive websites where technologies meet creativity.",
  resumeUrl:
    "https://drive.google.com/file/d/1uI7c6vLLPnLve9ra8dFp78SEVklQ3XW7/view?usp=sharing",
  cta: {
    label: "Contact Him -->",
    to: "/contacts",
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
  imageMap: { prop1, profile, prop2 },
};

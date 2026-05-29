import hostel from "../assets/HostelAllocationSystem.png";
import { twitterArchive } from "./twitterArchiveData";

export const blogPosts = [
  {
    id: 3,
    title: "Building a Hostel Allocation System",
    date: "2026-05-29",
    time: "09:00 AM",
    content:
      "I built a hostel allocation system that handles real-time seat allocation, role-based access, concurrency-safe booking, and deployment-ready infrastructure. The full write-up covers the design choices, concurrency controls, and deployment flow behind the project. Read the full Medium post for the complete breakdown.",
    images: [hostel],
    tags: ["systemdesign", "concurrency", "projects"],
    externalUrl:
      "https://medium.com/@deepshekhar0306/building-a-hostel-allocation-system-design-concurrency-and-deployment-7388a188804e",
    createdAt: "2026-05-29T03:30:00.000Z",
  },
  {
    id: 1,
    title: "Starting my Portfolio Website",
    date: "2024-03-20",
    time: "10:30 AM",
    content: "I've finally decided to build my own portfolio website from scratch. It's going to be a place where I can showcase my projects and blog about my progress.",
    images: ["/blog/portfolio-start.webp"],
    tags: ["webdev", "portfolio", "react"]
  },
  {
    id: 2,
    title: "Learning Tailwind CSS v4",
    date: "2024-03-25",
    time: "02:15 PM",
    content: "Tailwind CSS v4 is amazing! The zero-config approach and the CSS-first configuration make it so much faster to set up projects.",
    images: [],
    tags: ["tailwindcss", "css", "frontend"]
  }
];

export { twitterArchive };

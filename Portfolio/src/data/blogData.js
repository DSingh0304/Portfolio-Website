import hostel from "../assets/HostelAllocationSystem.png";
import { twitterArchive } from "./twitterArchiveData";

const iitgSummerSchoolImage = "/icons_experience/IITG.png";

export const blogPosts = [
  {
    id: 6,
    title: "200 Questions on LeetCode",
    date: "2026-07-02",
    time: "09:15 PM",
    content:
      "I recently completed 200 coding questions and wanted to mark the milestone properly. More than the number itself, the real value came from building consistency, improving problem-solving speed, and learning to stay calm when a solution was not obvious right away.\n\n" +
      "I shared the milestone on LinkedIn because it felt important to document the progress publicly and keep myself accountable for what comes next. The goal was never just to chase a number; it was to build a stronger foundation in data structures, algorithms, and the habit of showing up every day.\n\n" +
      "This is one of those checkpoints that reminds me that steady effort compounds.",
    images: ["/icons_experience/Leetcode.png"],
    tags: ["dsa", "consistency", "milestone", "learning"],
    createdAt: "2026-07-02T15:30:00.000Z",
  },
  {
    id: 5,
    title: "BalanceEngine: Building a Production-Grade Ledger",
    date: "2026-07-02",
    time: "02:45 PM",
    content:
      "I wrote a Medium blog about BalanceEngine, a production-grade double-entry ledger and balance engine inspired by real fintech systems. The project is built around immutable balanced debit and credit entries, with balances computed dynamically instead of being stored as a mutable column.\n\n" +
      "The write-up covers the parts that made this project interesting to build: PostgreSQL-level immutability through triggers, deterministic locking to keep concurrent transfers safe, Redis-backed idempotency for exactly-once processing, and real-time updates without polluting the core transaction flow.\n\n" +
      "It was one of the most satisfying projects I have worked on because it combined backend design, correctness, and real-world product thinking in one system. You can read the full article on my Medium profile.",
    images: ["/icons_experience/BE.png"],
    tags: ["medium", "fintech", "systemdesign", "backend"],
    externalUrl: "https://medium.com/@deepshekhar0306/how-financial-systems-handle-transactions-4816423f9e32",
    createdAt: "2026-07-02T14:15:00.000Z",
  },
  {
    id: 4,
    title: "ACM Summer School 2026 at IIT Guwahati",
    date: "2026-07-02",
    time: "08:30 PM",
    content:
      "Recently, I had the opportunity to attend the ACM Summer School 2026 on Natural Language Processing, hosted by CLST at the Indian Institute of Technology, Guwahati. It was a genuinely valuable experience, with sessions that brought together researchers and practitioners working on NLP and language models, and with students from across the country who were equally enthusiastic about the field.\n\n" +
      "Being actively involved with the IIITU ACM Student Chapter made the experience even more meaningful. Learning from people who are building and studying modern language technologies, exchanging ideas with other attendees, and seeing how broadly the community is growing around NLP left me feeling grateful and inspired.\n\n" +
      "Thankful to ACM and the CLST team at IIT Guwahati for curating such a thoughtful and high-value program.",
    images: [iitgSummerSchoolImage],
    tags: ["community", "acm", "nlp", "ai"],
    createdAt: "2026-07-02T14:00:00.000Z",
  },
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

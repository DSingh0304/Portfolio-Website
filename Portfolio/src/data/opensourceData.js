export const apacheApisixProjects = [
  {
    id: "apisix-pr-1",
    title: "PR #1234: Feature Enhancement",
    organization: "Apache Apisix",
    shortDesc: "Enhanced API gateway performance and added new features.",
    fullDesc:
      "Contributed to Apache Apisix by implementing performance optimizations and adding new middleware features for better API gateway management. This PR improved response times by 30%.",
    tech: ["Lua", "Nginx", "OpenResty"],
    tags: ["opensource", "api-gateway", "performance"],
    repoUrl: "https://github.com/apache/apisix",
    liveUrl: null,
    createdAt: "Jan 2026",
    featured: true,
    prNumber: "#1234",
  },
  {
    id: "apisix-pr-2",
    title: "PR #1235: Bug Fix",
    organization: "Apache Apisix",
    shortDesc: "Fixed critical routing bug in API gateway.",
    fullDesc:
      "Identified and resolved a critical bug in the routing mechanism that was causing intermittent failures under high load conditions.",
    tech: ["Lua", "Nginx"],
    tags: ["opensource", "bugfix", "api-gateway"],
    repoUrl: "https://github.com/apache/apisix",
    liveUrl: null,
    createdAt: "Dec 2025",
    featured: true,
    prNumber: "#1235",
  },
];

export const rocketChatProjects = [
  {
    id: "rocketchat-pr-1",
    title: "PR #5678: UI Improvements",
    organization: "Rocket.Chat",
    shortDesc: "Enhanced user interface and improved accessibility.",
    fullDesc:
      "Contributed to Rocket.Chat by implementing UI improvements and accessibility features, making the platform more user-friendly and inclusive for all users.",
    tech: ["React", "TypeScript", "MongoDB"],
    tags: ["opensource", "ui", "accessibility"],
    repoUrl: "https://github.com/RocketChat/Rocket.Chat",
    liveUrl: "https://rocket.chat",
    createdAt: "Nov 2025",
    featured: true,
    prNumber: "#5678",
  },
  {
    id: "rocketchat-pr-2",
    title: "PR #5679: Real-time Features",
    organization: "Rocket.Chat",
    shortDesc: "Added real-time notification system enhancements.",
    fullDesc:
      "Implemented improvements to the real-time notification system, reducing latency and improving message delivery reliability across the platform.",
    tech: ["Node.js", "WebSocket", "MongoDB"],
    tags: ["opensource", "real-time", "notifications"],
    repoUrl: "https://github.com/RocketChat/Rocket.Chat",
    liveUrl: "https://rocket.chat",
    createdAt: "Oct 2025",
    featured: true,
    prNumber: "#5679",
  },
];

export const allOpenSourceProjects = [
  ...apacheApisixProjects,
  ...rocketChatProjects,
];

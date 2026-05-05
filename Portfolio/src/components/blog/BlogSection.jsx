import Section from "../common/Section";
import { blogPosts, twitterArchive } from "../../data/blogData";
import { NavLink } from "react-router-dom";

const getSortDate = (post) => {
  if (post.createdAt) {
    return new Date(post.createdAt);
  }
  return new Date(post.date);
};

const toTitleCase = (value) =>
  value.replace(/\w\S*/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

const humanizeTag = (tag) =>
  String(tag)
    .replace(/#/g, "")
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();

const categoryRules = [
  {
    label: "Systems Design",
    keywords: [
      "system design",
      "systemdesign",
      "architecture",
      "scalability",
      "performance",
      "distributed",
      "microservice",
      "idempotency",
      "concurrency",
    ],
  },
  {
    label: "Backend",
    keywords: [
      "backend",
      "api",
      "server",
      "node",
      "express",
      "prisma",
      "postgres",
      "postgresql",
      "redis",
      "queue",
      "bullmq",
      "socket",
      "docker",
    ],
  },
  {
    label: "Open Source",
    keywords: [
      "open source",
      "opensource",
      "pull request",
      "pr #",
      "pr#",
      "github",
      "apache",
      "apisix",
      "contribute",
      "merged",
    ],
  },
  {
    label: "Projects",
    keywords: [
      "project",
      "built",
      "build",
      "application",
      "app",
      "website",
      "demo",
      "prototype",
      "repo",
    ],
  },
  {
    label: "Learning",
    keywords: ["learn", "learning", "study", "dsa", "course", "exam", "gsoc"],
  },
  {
    label: "Career",
    keywords: ["intern", "lead", "role", "joined", "team", "swe", "job", "hiring"],
  },
  {
    label: "Community",
    keywords: ["community", "students", "event", "discussion", "meetup", "college", "acm"],
  },
];

const getPostCategory = (post) => {
  if (post.tags && post.tags.length > 0) {
    const tagLabel = humanizeTag(post.tags[0]);
    return tagLabel ? toTitleCase(tagLabel) : "Update";
  }
  const text = [post.title, post.content].filter(Boolean).join(" ").toLowerCase();
  for (const rule of categoryRules) {
    if (rule.keywords.some((keyword) => text.includes(keyword))) {
      return rule.label;
    }
  }
  return post.type === "tweet" ? "Update" : "Blog";
};

const getPostTitle = (post) => {
  if (post.title) {
    return post.title;
  }
  if (post.content) {
    const firstLine = post.content.split("\n").find((line) => line.trim()) || post.content;
    return firstLine.length > 80 ? `${firstLine.slice(0, 77)}...` : firstLine;
  }
  return post.type === "tweet" ? "Tweet" : "Blog Post";
};

const coverHeightClass = "h-44 sm:h-48";

const getExcerpt = (post) => {
  if (!post.content) {
    return "";
  }
  const cleaned = post.content.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 180) {
    return cleaned;
  }
  return `${cleaned.slice(0, 177)}...`;
};

const BlogSection = ({ limit = 3 }) => {
  const recentPosts = [...blogPosts, ...twitterArchive]
    .sort((a, b) => getSortDate(b) - getSortDate(a))
    .slice(0, limit);

  return (
    <Section title="blog" id="blog">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
        {recentPosts.map((post) => (
          <article
            key={post.id}
            className="border-2 border-gray-700 bdr transition-all duration-300 rounded-md overflow-hidden relative bg-[#282c33]"
          >
            <NavLink
              to="/blog"
              className="block w-full h-full text-left hover:bg-white/5 transition-colors"
              aria-label={`Open ${getPostTitle(post)} in blog`}
            >
              {post.images && post.images.length > 0 && (
                <img
                  src={post.images[0]}
                  alt={`${getPostTitle(post)} cover`}
                  className={`w-full ${coverHeightClass} object-cover border-b border-gray-700`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
                  <span className="font-mono">{post.date}</span>
                  <div className="flex items-center gap-2">
                    <span>{post.time}</span>
                    {getPostCategory(post) && (
                      <span className="text-purple text-[10px] font-medium italic px-2 py-0.5 border border-purple/30 rounded">
                        {getPostCategory(post)}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                  {getPostTitle(post)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {getExcerpt(post)}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 min-h-[26px]">
                  {post.tags && post.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-purple text-[10px] border border-purple px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </NavLink>
          </article>
        ))}
      </div>
      <div className="flex justify-center md:justify-start mt-8">
        <NavLink
          to="/blog"
          className="px-6 py-2 border border-purple font-semibold rounded hover:bg-purple hover:text-white transition-colors"
        >
          View all posts &rarr;
        </NavLink>
      </div>
    </Section>
  );
};

export default BlogSection;

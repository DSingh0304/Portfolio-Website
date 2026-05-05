import { useMemo, useState } from "react";
import Section from "../components/common/Section";
import { blogPosts, twitterArchive } from "../data/blogData";

const getSearchTokens = (query) =>
  query.trim().toLowerCase().split(/\s+/).filter(Boolean);

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

const matchesPostTokens = (post, tokens) => {
  if (tokens.length === 0) {
    return true;
  }
  const haystack = [
    post.title,
    post.content,
    post.type,
    post.category,
    (post.tags || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return tokens.every((token) => haystack.includes(token));
};

const getSortDate = (post) => {
  if (post.createdAt) {
    return new Date(post.createdAt);
  }
  return new Date(post.date);
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

const BlogPage = () => {
  const [activePost, setActivePost] = useState(null);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const queryTokens = useMemo(() => getSearchTokens(query), [query]);

  const allPosts = useMemo(() => {
    const blogEntries = blogPosts.map((post) => {
      const normalized = { ...post, type: post.type || "blog" };
      return { ...normalized, category: getPostCategory(normalized) };
    });
    const twitterEntries = twitterArchive.map((post) => {
      const normalized = { ...post, type: post.type || "tweet" };
      return { ...normalized, category: getPostCategory(normalized) };
    });

    return [...blogEntries, ...twitterEntries].sort((a, b) => {
      return getSortDate(b) - getSortDate(a);
    });
  }, []);

  const categoryOptions = useMemo(() => {
    const categories = [];
    allPosts.forEach((post) => {
      if (post.category && !categories.includes(post.category)) {
        categories.push(post.category);
      }
    });
    return ["all", ...categories];
  }, [allPosts]);

  const orderedPosts = useMemo(() => {
    let list = allPosts;
    if (categoryFilter !== "all") {
      list = list.filter((post) => post.category === categoryFilter);
    }
    if (queryTokens.length === 0) {
      return list;
    }
    const matched = [];
    const rest = [];
    list.forEach((post) => {
      if (matchesPostTokens(post, queryTokens)) {
        matched.push(post);
      } else {
        rest.push(post);
      }
    });
    return [...matched, ...rest];
  }, [allPosts, queryTokens, categoryFilter]);

  const openPost = (post) => {
    setActivePost(post);
  };

  const closePost = () => {
    setActivePost(null);
  };

  return (
    <div className="min-h-screen">
      <Section title="blog" id="blog">
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl mb-8">
            <span className="text-purple">~~</span> blogging my journey <span className="text-purple">~~</span>
          </h3>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blog posts..."
              aria-label="Search blog posts"
              className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter by category"
              className="w-full md:w-56 pl-4 pr-10 py-2 rounded bg-gray-900 text-white border border-purple/40 focus:outline-none focus:border-purple"
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All categories" : category}
                </option>
              ))}
            </select>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
            {orderedPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="border-2 border-gray-700 bdr transition-all duration-300 rounded-md overflow-hidden relative bg-[#282c33]"
                >
                  <button
                    onClick={() => openPost(post)}
                    className="w-full h-full text-left hover:bg-white/5 transition-colors"
                    aria-label={`Open ${getPostTitle(post)}`}
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
                          {post.category && (
                            <span className="text-purple text-[10px] font-medium italic px-2 py-0.5 border border-purple/30 rounded">
                              {post.category}
                            </span>
                          )}
                        </div>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                        {getPostTitle(post)}
                      </h2>
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
                  </button>
                </article>
            ))}
          </div>
        </div>
      </Section>
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closePost}
            aria-label="Close post overlay"
          />
          <div
            className="relative w-[92%] max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border border-gray-700 bg-[#1f232a] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            {activePost.images && activePost.images.length > 0 && (
              <img
                src={activePost.images[0]}
                alt={`${getPostTitle(activePost)} cover`}
                className="w-full h-auto object-contain border-b border-gray-700 rounded-t-xl"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            )}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 text-gray-400 text-sm mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono">{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.time}</span>
                  {activePost.category && (
                    <span className="text-purple text-xs font-medium italic px-2 py-0.5 border border-purple/30 rounded">
                      {activePost.category}
                    </span>
                  )}
                </div>
                <button
                  onClick={closePost}
                  className="text-gray-300 hover:text-white bg-gray-800/80 rounded-full w-9 h-9 flex items-center justify-center"
                  aria-label="Close post"
                >
                  x
                </button>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {getPostTitle(activePost)}
              </h2>
              <p className="text-gray-300 whitespace-pre-wrap mb-6 leading-relaxed">
                {activePost.content}
              </p>

              {activePost.images && activePost.images.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {activePost.images.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Blog image ${idx + 2}`}
                      className="rounded-lg border border-gray-700 w-full h-auto object-cover max-h-[500px]"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ))}
                </div>
              )}

              {activePost.tags && activePost.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {activePost.tags.map((tag) => (
                    <span key={tag} className="text-purple text-xs border border-purple px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;

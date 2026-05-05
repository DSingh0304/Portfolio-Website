import { useState } from "react";
import Section from "../components/common/Section";
import { blogPosts, twitterArchive } from "../data/blogData";

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

  const allPosts = [...blogPosts, ...twitterArchive].sort((a, b) => {
    return getSortDate(b) - getSortDate(a);
  });

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
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 grid-orientation">
            {allPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="border-2 border-gray-700 bdr transition-all duration-300 rounded-md overflow-hidden relative bg-[#282c33]"
                >
                  <button
                    onClick={() => openPost(post)}
                    className="w-full h-full text-left hover:bg-white/5 transition-colors"
                    aria-label={`Open ${getPostTitle(post)}`}
                  >
                    {post.images && post.images.length > 0 ? (
                      <img
                        src={post.images[0]}
                        alt={`${getPostTitle(post)} cover`}
                        className={`w-full ${coverHeightClass} object-cover border-b border-gray-700`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div
                        className={`w-full ${coverHeightClass} border-b border-gray-700 bg-gradient-to-br from-[#1f232a] via-[#282c33] to-[#1f232a]`}
                        aria-hidden="true"
                      />
                    )}
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
                        <span className="font-mono">{post.date}</span>
                        <div className="flex items-center gap-2">
                          <span>{post.time}</span>
                          {post.type === "tweet" && (
                            <span className="text-purple text-[10px] font-medium italic px-2 py-0.5 border border-purple/30 rounded">
                              Twitter
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
                  {activePost.type === "tweet" && (
                    <span className="text-purple text-xs font-medium italic px-2 py-0.5 border border-purple/30 rounded">
                      Twitter
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

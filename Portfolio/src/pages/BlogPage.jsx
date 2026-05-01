import { useState } from "react";
import Section from "../components/common/Section";
import { blogPosts, twitterArchive } from "../data/blogData";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const BlogPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const allPosts = [...blogPosts, ...twitterArchive].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <Section title="blog" id="blog">
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl mb-8">
            <span className="text-purple">~~</span> blogging my journey <span className="text-purple">~~</span>
          </h3>
          
          <div className="space-y-4">
            {allPosts.map((post) => {
              const isExpanded = expandedId === post.id;
              
              return (
                <div 
                  key={post.id} 
                  className={`border border-gray-700 rounded-lg bg-[#282c33] transition-all duration-300 shadow-lg overflow-hidden ${
                    isExpanded ? "border-purple" : ""
                  }`}
                >
                  {/* Blog Strip (Header) */}
                  <button 
                    onClick={() => toggleExpand(post.id)}
                    className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-gray-400 text-sm font-mono whitespace-nowrap">
                        {post.date}
                      </span>
                      <h2 className={`text-lg sm:text-xl font-bold transition-colors ${
                        isExpanded ? "text-purple" : "text-white"
                      }`}>
                        {post.title || (post.type === "tweet" ? "Twitter Archive Post" : "Blog Post")}
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      {post.type === "tweet" && (
                        <span className="hidden md:inline text-purple text-xs font-medium italic px-2 py-0.5 border border-purple/30 rounded">
                          Twitter
                        </span>
                      )}
                      {isExpanded ? (
                        <FiChevronUp className="text-purple text-xl" />
                      ) : (
                        <FiChevronDown className="text-gray-400 text-xl" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[2000px] opacity-100 p-6 border-t border-gray-800" : "max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    <div className="flex items-center text-gray-400 text-sm mb-6">
                      <span>{post.time}</span>
                      {post.type === "tweet" && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-purple font-medium italic md:hidden">Twitter Archive</span>
                        </>
                      )}
                    </div>
                    
                    <p className="text-gray-300 whitespace-pre-wrap mb-6 leading-relaxed">
                      {post.content}
                    </p>

                    {post.images && post.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {post.images.map((img, idx) => (
                          <img 
                            key={idx} 
                            src={img} 
                            alt={`Blog image ${idx + 1}`} 
                            className="rounded-lg border border-gray-700 w-full h-auto object-cover max-h-[500px]"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-purple text-xs border border-purple px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;

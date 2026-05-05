import Section from "../common/Section";
import { blogPosts, twitterArchive } from "../../data/blogData";
import { NavLink } from "react-router-dom";

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
  if (post.type === "tweet" && post.content) {
    const firstLine = post.content.split("\n")[0];
    return firstLine.length > 60 ? `${firstLine.slice(0, 60)}...` : firstLine;
  }
  return "Post";
};

const BlogSection = ({ limit = 2 }) => {
  const recentPosts = [...blogPosts, ...twitterArchive]
    .sort((a, b) => getSortDate(b) - getSortDate(a))
    .slice(0, limit);

  return (
    <Section title="blog" id="blog">
      <div className="grid gap-6 md:grid-cols-2">
        {recentPosts.map((post) => (
          <div key={post.id} className="border border-gray-700 p-6 rounded-lg bg-[#282c33] hover:border-purple transition-colors shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center text-gray-400 text-xs mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.time}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{getPostTitle(post)}</h3>
              <p className="text-gray-400 line-clamp-3 mb-4">
                {post.content}
              </p>
            </div>
            <NavLink 
              to="/blog" 
              className="text-purple hover:underline inline-flex items-center gap-1 font-medium"
            >
              Read more &rarr;
            </NavLink>
          </div>
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

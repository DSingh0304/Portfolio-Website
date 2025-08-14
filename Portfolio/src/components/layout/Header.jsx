import { NavLink } from "react-router-dom";
import logo from "/Logo.webp";

const Header = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-white text-lg" : "text-purple";

  return (
    <header className="py-6">
      <div className="container flex justify-between items-center">
        <NavLink
          to="/"
          className="flex hover:cursor-pointer items-center space-x-2 text-white text-xl font-bold"
        >
          <img src={logo} alt="LOGO"></img>
          <span>Deep</span>
        </NavLink>
        <nav className="hidden md:flex space-x-8 text-md font-semibold items-center">
          <NavLink to="/" className={navLinkClasses} end>
            <span className="text-purple">#</span>home
          </NavLink>
          <NavLink to="/projects" className={navLinkClasses}>
            <span className="text-purple">#</span>projects
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            <span className="text-purple">#</span>about
          </NavLink>
          <NavLink to="/contacts" className={navLinkClasses}>
            <span className="text-purple">#</span>contacts
          </NavLink>
          <select
            id="language-select"
            name="language"
            className="block px-3 py-1 hover:cursor-pointer rounded-md shadow-sm bg-gray-800 text-gray-300 focus:outline-none focus:ring-green-400 text-sm"
          >
            <option value="en">EN</option>
            <option value="hn">HN</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;

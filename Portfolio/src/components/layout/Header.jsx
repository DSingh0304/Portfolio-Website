import logo from "../../assets/Logo.webp"

const Header = () => {
  return (
    <>
      <header className="py-6">
        <div className="container flex justify-between items-center">
          <a
            href="#"
            className="flex items-center space-x-2 text-white text-xl font-bold"
          >
            <img
              src={logo}
              alt="LOGO"
            ></img>
            <span>Deep</span>
          </a>
          <nav className="hidden md:flex space-x-8 text-md font-semibold">
            <a href="#" className="text-white text-hover transition-colors">
              <span className="text-purple">#</span>home
            </a>
            <a href="#" className="text-hover transition-colors">
              <span className="text-purple">#</span>projects
            </a>
            <a href="#" className="text-hover transition-colors">
              <span className="text-purple">#</span>about
            </a>
            <a href="#" className="text-hover transition-colors">
              <span className="text-purple">#</span>contacts            </a>
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
    </>
  );
};

export default Header;

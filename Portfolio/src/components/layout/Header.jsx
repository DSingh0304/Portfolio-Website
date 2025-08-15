import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/Logo.webp";
import { FiHome, FiFolder, FiUser, FiMail, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-white"
      : "text-purple";

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="py-4 sticky top-0 z-40 bg-[#282c33]/80 backdrop-blur">
      <div className="container flex justify-between items-center">
        <NavLink
          to="/"
          className="flex hover:cursor-pointer items-center space-x-2 text-white text-xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="LOGO" className="h-8 w-auto" />
          <span>Deep</span>
        </NavLink>
        {/* Desktop nav */}
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
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 border border-purple text-white rounded"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25A.75.75 0 014.5 4.5h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 7.5a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 6.75a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer + overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer panel */}
          <nav
            aria-label="Mobile navigation"
            className="md:hidden fixed inset-x-0 top-0 z-50 origin-top transform transition duration-200 ease-out animate-slideDown"
          >
            <div className="bg-[#282c33] border-b border-gray-700 pt-16 pb-4 shadow-lg relative">
              <button
                type="button"
                aria-label="Close menu"
                className="absolute right-4 top-4 p-2 border border-purple text-white rounded"
                onClick={() => setMenuOpen(false)}
              >
                <FiX className="h-5 w-5" />
              </button>
              <div className="container flex flex-col text-lg font-semibold">
                <NavLink
                  to="/"
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkClasses({ isActive })} flex items-center gap-3 px-3 py-3 rounded hover:bg-white/5 active:bg-white/10`
                  }
                >
                  <FiHome className="text-purple" />
                  <span>home</span>
                </NavLink>
                <NavLink
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkClasses({ isActive })} flex items-center gap-3 px-3 py-3 rounded hover:bg-white/5 active:bg-white/10`
                  }
                >
                  <FiFolder className="text-purple" />
                  <span>projects</span>
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkClasses({ isActive })} flex items-center gap-3 px-3 py-3 rounded hover:bg-white/5 active:bg-white/10`
                  }
                >
                  <FiUser className="text-purple" />
                  <span>about</span>
                </NavLink>
                <NavLink
                  to="/contacts"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkClasses({ isActive })} flex items-center gap-3 px-3 py-3 rounded hover:bg-white/5 active:bg-white/10`
                  }
                >
                  <FiMail className="text-purple" />
                  <span>contacts</span>
                </NavLink>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;

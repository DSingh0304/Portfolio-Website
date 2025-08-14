import logo from "../../assets/Logo.webp";

const Footer = () => {
  return (
    <>
      <footer className="py-8 border-t border-gray-800">
        <hr className="my-4" ></hr>
        <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="flex items-center space-x-2 text-white text-xl font-bold"
            >
              <img src={logo} alt="LOGO"></img>
              <span>Deep</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Web designer and front-end developer
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © Copyright 2024. Made by Elias
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold mb-4">Media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0a2 2 0 002-2v-3a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 002 2m-7 0h7"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.169 6.839 9.489.5.092.682-.218.682-.483 0-.237-.008-.867-.013-1.7-2.782.604-3.367-1.34-3.367-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.342 1.087 2.91.83.091-.645.349-1.087.636-1.338-2.22-.252-4.555-1.11-4.555-4.945 0-1.09.39-1.983 1.029-2.682-.103-.252-.447-1.27.098-2.656 0 0 .84-.268 2.75 1.024A9.564 9.564 0 0112 6.848c.85.006 1.7.114 2.504.32a9.564 9.564 0 012.75-1.024c.545 1.386.201 2.404.098 2.656.639.7 1.029 1.592 1.029 2.682 0 3.845-2.335 4.692-4.562 4.942.359.31.678.922.678 1.862 0 1.345-.013 2.428-.013 2.753 0 .267.18.579.688.481C19.136 20.166 22 16.415 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

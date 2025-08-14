import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import logo from "/Logo.webp";
import { Link } from "react-router-dom";

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
              Software Developer
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © Copyright 2025. Made by Deep
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold mb-4 text-hover ">Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DSingh0304"
                target="_blank"
                className=" text-2xl text-gray-400 hover:text-white transition-colors"
              >
              <FaGithub />

              </a>
              <a
                href="https://www.linkedin.com/in/deepshekharsingh/"
                target="_blank"
                className=" text-2xl text-gray-400 hover:text-white transition-colors"
              >
               <FaLinkedin />
              </a>
              <a
                href="https://x.com/DeepShekhar03"
                target="_blank"
                className=" text-2xl   text-gray-400 hover:text-white transition-colors"
              >
               <FaSquareXTwitter />
              </a>
              <a
                href="https://www.instagram.com/_deep_3.0_/"
                target="_blank"
                className=" text-2xl   text-gray-400 hover:text-white transition-colors"
              >
               <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

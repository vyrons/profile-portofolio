import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black text-white px-10 md:px-20 py-20 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Kiri - text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-geist-medium tracking-tight">
            Let’s <span className="italic">connect.</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base font-geistmono-light">
            Feel free to reach out for collaboration or just a friendly chat.
          </p>
        </div>

        {/* Kanan - socials */}
        <div className="flex flex-col items-start gap-4">
          <a
            href="https://www.linkedin.com/in/ryan-rafidhea-reyhan-439109211/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <FaLinkedin className="text-xl group-hover:text-gray-400 transition-colors duration-300" />
            <span className="font-geistmono-regular text-sm group-hover:text-gray-400 transition-colors duration-300">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/vyrons"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <FaGithub className="text-xl group-hover:text-gray-400 transition-colors duration-300" />
            <span className="font-geistmono-regular text-sm group-hover:text-gray-400 transition-colors duration-300">
              GitHub
            </span>
          </a>

          <a
            href="https://www.instagram.com/novel.jsx?igsh=MW1zNWI1cmR0Y3ds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <FaInstagram className="text-xl group-hover:text-gray-400 transition-colors duration-300" />
            <span className="font-geistmono-light text-sm group-hover:text-gray-400 transition-colors duration-300">
              Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Bawah copyright */}
      <div className="border-t border-gray-800 mt-20 pt-6 flex justify-between text-xs text-gray-500 tracking-wide font-geist-regular">
        <p>© 2025 Ryan Rafidhea Reyhan. All rights reserved.</p>
        <p className="italic font-geistmono-regular">crafted with care</p>
      </div>
    </footer>
  );
};

export default Footer;

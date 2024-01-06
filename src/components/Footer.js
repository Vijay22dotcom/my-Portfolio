import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-white py-8 border-t border-[#2A0E61]   ">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Connect with Me</p>

        {/* Add your social media or contact links here */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/vijay22dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-110"
          >
            <FaGithub className="h-[30px] w-[30px] " />
          </a>
          <a
            href="https://linkedin.com/in/vijay-rajpara-7a321a24a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-110"
          >
            <CiLinkedin className="h-[30px] w-[30px] " />
          </a>
          <a
            href="mailto:vijay22rajpara@gmail.com"
            className="transition duration-300 transform hover:scale-110"
          >
            <MdOutlineMail className="h-[30px] w-[30px] " />
          </a>
        </div>

        <div className="mt-4">
          <p className="text-sm">
            Let&apos;s collaborate on innovative projects. Feel free to reach
            out!
          </p>
        </div>

        <p className="mt-4">&copy; 2024 Vijay Rajpara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

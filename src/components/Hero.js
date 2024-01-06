"use client";
import Image from "next/image";
import React, { useEffect } from "react";

import img2 from "../../public/programer1.png";

const Hero = () => {
  return (
    <>
      <div
        className="flex h-full w-full  max-[500px]:flex-col max-[500px]:items-center max-[500px]:text-center "
        id="#home"
      >
        <div className="text-white mt-[50px] w-[60%]  h-[91vh]   p-[20px] max-md:text-[35px] text-[40px]   max-[500px]:w-[100%] max-[500px]:h-[100%]   ">
          <h5 className="uppercase mt-[20vh]  max-[500px]:mt-[8vh]  ">
            i&apos;m vijay rajpara
          </h5>
          <h3 className="uppercase ">
            a {/* if you want animation so add text-effect */}
            <span className="  text-effect text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              Web Devloper
            </span>
          </h3>
          <p className="text-lg text-gray-400 my-5 max-w-[600px]">
            I&apos;m a Full Stack web development with experience in{" "}
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              MERN
            </span>{" "}
            stack development. Check out my projects and skills.
          </p>
          <div>
            <a
              className="text-[20px]    border-gradient rounded-lg p-[10px] hover:bg-gradient-to-r from-purple-500 to-cyan-500 "
              href="#contact"
            >
              <span className="  "> About-me </span>
            </a>
          </div>
        </div>
        <div className=" w-[40%] flex items-center ">
          <Image
            src={img2}
            alt="Picture of the author"
            className="max-[500px]:h-[200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

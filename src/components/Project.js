import Image from "next/image";
import React from "react";
import { Project_data } from "../../constant";

const Project = () => {
  return (
    <>
      <div className="pt-[60px]" id="project">
        <div className="text-center">
          <span className="  text-[30px] r uppercase text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            my Projects
          </span>
        </div>

        <div className="flex w-full justify-center py-20  flex-wrap  ">
          {Project_data.map((item, i) => (
            <div
              className=" ml-[10px] mb-[10px] rounded-lg shadow-lg border border-[#2A0E61] w-[30%] h-full  max-[800px]:w-[45%] max-[500px]:w-[90%]   "
              key={i}
            >
              <div className=" w-full h-[300px] flex items-center justify-center ">
                <Image
                  src={item.image}
                  alt="title"
                  width={300}
                  height={300}
                  className=" "
                />
              </div>

              <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">
                  {item.title}
                </h1>
                <p className="mt-2 text-gray-300">{item.subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;

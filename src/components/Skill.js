"use client";

import { Skill_data } from "../../constant";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const longcang = Dancing_Script({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});
const Skill = () => {
  return (
    <>
      <div className="pt-[60px]" id="skill">
        <div className="text-center  mb-[100px]">
          <span className="  text-[30px]  uppercase text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  ">
            skills
          </span>
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center px-[100px] max-[500px]:px-[10px]  ">
          {Skill_data.map((image, index) => (
            <div className="p-[20px]" key={index}>
              <Image
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="text-center my-[100px] ">
          <span
            className={` ${longcang.className}  text-[30px]  uppercase text-gray-100          `}
          >
            making website with modern technologies
          </span>
        </div>
      </div>
    </>
  );
};

export default Skill;

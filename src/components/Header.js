import { navItems } from "../../constant";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
const Header = () => {
  return (
    <header className="flex z-50 fixed justify-between items-center backdrop-blur-[10px] w-full p-[20px]  text-gray-100  border-b-[#3c3857]    ">
      <nav className=" ">
        <p className=" text-[20px] uppercase text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          vr
        </p>
      </nav>

      <nav className="flex">
        {navItems.map((item) => (
          <a
            href={item.slug}
            key={item.name}
            className="capitalize mx-[10px] px-[10px]   max-[500px]:p-[5px] hover:text-cyan-500 "
          >
            {item.name}
          </a>
        ))}
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://github.com/vijay22dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-110"
          >
            <FaGithub className="h-[30px] w-[30px] " />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

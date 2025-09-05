import Typewriter from "react-ts-typewriter";
import img2 from "../assets/joy.png";
import { CgMail } from "react-icons/cg";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div className="relative space-y-14">
      <div className=" md:h-[100vh] w-full border-b text-white">
        <div className="max-w-7xl mx-auto h-full flex mt-5 ">
          <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
            <div className="flex-1  m-3 my-auto space-y-4 ">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Hello, It is Me
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Joy Kumar Biswas
              </h2>
              <div className="text-2xl lg:text-4xl font-semibold text-gray-200">
                
                <Typewriter
                  speed={100}
                  text={[" Front-end Developer "," MERN Stack Developer ", " Web Developer " , " React Developer "]}
                  loop={true}
                ></Typewriter>
              </div>

              <div className="flex gap-7 text-2xl ">
                <a
                  href="https://www.facebook.com/joy.kumarbiswas.33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.instagram.com/jkumarbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-kumar-biswas-8a432929b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/joykbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 transition-colors duration-300 hover:scale-110 transform"
                >
                  <BsGithub />
                </a>
                <a
                  href="mailto:joykumarbiswas100@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <CgMail className="text-3xl" />
                </a>
              </div>
              <div className=" max-md:pb-[84px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1BgNS5Uc1ZqmslDK3ik8EatpWe-YScSCA?usp=sharing"
                >
                  <button className="border border-gray-400 px-12 py-4 text-xl flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                    <FaDownload /> Download Resume
                  </button>
                </a>
              </div>
            </div>

            <div className="flex-1 text-end m-3 my-auto">
              <img
                className="imgBg mx-auto p-5 w-48 md:w-72 lg:w-80"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
        <a href="#about">
          <div className="scroll-down absolute  "></div>
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;

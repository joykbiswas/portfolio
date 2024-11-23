import Typewriter from "react-ts-typewriter";
import img2 from "../assets/joy.png";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div className="relative space-y-14">
      <div className=" md:h-[100vh] w-full border bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto h-full flex mt-5 ">
          <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
            <div className="flex-1  m-3 my-auto space-y-4 ">
              <h4 className="text-2xl md:text-3xl font-semibold">
                Hello, It is Me
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-emerald-400">
                Joy Biswas
              </h2>
              <div className="text-2xl  lg:text-4xl font-semibold">
                
                <Typewriter
                  speed={100}
                  text={[" Front-end Developer."," MERN Stack Developer", " Web Site Developer" ]}
                  loop={true}
                ></Typewriter>
              </div>

              <div className="flex gap-7 text-2xl ">
                <a
                  href="https://www.facebook.com/joy.kumarbiswas.33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="hover:text-green-300 hover:bg-red-500 rounded-full hover:  hover:rounded-full" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:rounded" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-kumar-biswas-8a432929b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </a>
                <a
                  href="https://github.com/joykbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:rounded-full" />
                </a>
              </div>
              {/* <div className="space-x-5 py-5 ">
                <button className="btn text-xl bg-gradient-to-r from-indigo-500">View My Works</button>
                <button className="btn text-xl bg-gradient-to-r from-emerald-500">Contact Me</button>
                
              </div> */}
              <div className=" max-md:pb-[84px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1BgNS5Uc1ZqmslDK3ik8EatpWe-YScSCA?usp=sharing"
                >
                  <button className="border  px-12 py-4 text-xl flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <FaDownload /> Download Resume
                  </button>
                </a>
              </div>
            </div>

            <div className="flex-1 text-end m-3 my-auto">
              <img
                className=" border-4 rounded-full mx-auto p-3 w-48 md:w-72 lg:w-80"
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

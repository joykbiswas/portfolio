import Typewriter from "react-ts-typewriter";
import img1 from "../assets/Untitled__6_-removebg-preview (4).png";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin,  } from "react-icons/bs";

const HomeBanner = () => {
  return (
    <div className="space-y-14">
      <div className=" h-[100vh] w-full border bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto h-full border border-red-500 flex  ">
          <div className="md:flex w-full gap-9 ">
            <div className="flex-1 border m-3 border-red-500 my-auto space-y-2">
              <h4 className="text-3xl font-semibold">Hello, It is Me</h4>
              <h2 className="text-6xl font-bold">Joy Biswas</h2>
              <div className="text-4xl font-semibold">
                <Typewriter
                  speed={100}
                  text={[" I am Front-end Developer ."]}
                  loop={true}
                ></Typewriter>
              </div>

              <div className="flex gap-7 text-2xl ">
                <a
                  href="https://www.facebook.com/joy.kumarbiswas.33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-kumar-biswas-8a432929b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/joykbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
            <div className="flex-1 text-end m-3 border border-green-500 my-auto">
              <img
                className=" border-4 rounded-full mx-auto p-3 w-56 md:w-64 lg:w-80"
                src={img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

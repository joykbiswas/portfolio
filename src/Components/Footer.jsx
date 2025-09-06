
import { CgMail } from "react-icons/cg";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Joy Kumar Biswas</h2>
          <div className="flex gap-8 text-3xl mb-8">
            <a
              href="https://www.facebook.com/joy.kumarbiswas.33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-125"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/jkumarbiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-125"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/joy-kumar-biswas-8a432929b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/joykbiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-125"
            >
              <BsGithub />
            </a>
            <a
              href="mailto:joykumarbiswas100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300 transform hover:scale-125"
            >
              <CgMail />
            </a>
          </div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Joy Kumar Biswas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

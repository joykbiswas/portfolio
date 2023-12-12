/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
const ProjectCard = ({ project }) => {
  const {
    images,
    liveLink,
    projectTitle,
    projectsType,
    shortDescription,
    technology,
    githubServer,
    githubClient,
  } = project;
  console.log(project);
  return (
    <div className="">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
      >
        <div className="relative w-full h-60 overflow-hidden">
          <div className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
            <img
              src={images}
              alt=""
              className="object-cover object-top w-full"
            />
          </div>
        </div>
        <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
              {projectTitle}
            </h2>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
              {projectsType}
            </h2>
          </div>
          <p className="my-3 dark:text-gray-400">
            {shortDescription.slice(0, 125)}......
          </p>
        </div>
        <div className="tech  p-5 relative border-t border-white/10">
          <p className="uppercase dark:text-gray-400">
            
            <span className="font-bold">Technolohy: </span>
            {technology}
          </p>
          <div data-aos="fade-up" className="flex justify-between mt-2 gap-2 ">
            <Link to={liveLink}>
              
              <button className="myBtn px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                
                Live Link
              </button>
            </Link>
            <Link to={githubClient}>
              
              <button className="myBtn px-4 py-2  flex items-center gap-1 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <FaGithub className="text-3xl"/> Github Client
              </button>
            </Link>

            <Link to={githubServer}>
             
              <button className="myBtn px-4 py-2 text-sm  flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <FaGithub className="text-3xl" /> Github Server
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

/*
<div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
      >
        <div className="relative w-full h-60 overflow-hidden">
          <div className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
            <img
              src={images}
              alt=""
              className="object-cover object-top w-full"
            />
          </div>
        </div>
        <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
              {projectTitle}
            </h2>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
             {projectsType}
            </h2>
          </div>
          <p className="my-3 text-2xl  dark:text-gray-400">
            { shortDescription}
          </p>
        </div>
        <div className="tech   p-5 relative border-t border-white/10 ">
          <p className="uppercase dark:text-gray-400">
            <span className="font-bold">Technology: </span>
            <p className="text-2xl font-semibold">
              {technology}
            </p>
          </p>

          <div data-aos="fade-up" className="flex justify-between mt-2 ">
            <Link to={liveLink}>
              <button className="myBtn px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
                Live Link
              </button>
            </Link>
            
            <Link to={githubClient}>
              <button className="myBtn px-6 py-2 bg-btn-grad flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <FaGithub /> Github Client
              </button>
            </Link>
            <Link to={githubServer}>
              <button className="myBtn px-6 py-2 bg-btn-grad flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <FaGithub /> Github Server
              </button>
            </Link>
          </div>
        </div>
      </div>
*/

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
  
  return (
    <div className="group">
      <div className="card_glass mainDiv rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-blue-500/25">
        {/* Image Container */}
        <div className="relative w-full h-72 overflow-hidden rounded-t-2xl">
          <div className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 group-hover:scale-110">
            <img
              src={images}
              alt={projectTitle}
              className="object-cover object-top w-full h-full"
            />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content wrapper keeps height fixed; panels crossfade */}
        <div className="content-wrapper border-t border-gray-700/30">
          {/* Info Section */}
          <div className="info panel p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {projectTitle}
              </h2>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30">
                {projectsType}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {shortDescription.slice(0, 125)}...
            </p>
          </div>

          {/* Tech Section */}
          <div className="tech panel p-6">
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Technology</span>
              <p className="text-gray-300 mt-2 text-sm">
                {technology}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to={liveLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full myBtn px-6 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  🌐 Live Demo
                </button>
              </Link>
              <div className="flex gap-2">
                <Link to={githubClient} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full myBtn px-4 py-3 flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-xl transition-all duration-300 hover:scale-105">
                    <FaGithub className="text-lg"/> Client
                  </button>
                </Link>
                <Link to={githubServer} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full myBtn px-4 py-3 flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-xl transition-all duration-300 hover:scale-105">
                    <FaGithub className="text-lg"/> Server
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

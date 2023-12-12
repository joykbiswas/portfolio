// import "./style.css";
// import { FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";

import { useEffect, useState,  } from "react";
import ProjectsCard from "./ProjectCard";

const Projects = () => {

  const [projects, setProjects] =useState([])
  useEffect(() =>{
    fetch("./../../../public/document.json")
    .then(res =>res.json())
    .then(data=>{
      console.log(data)
      setProjects(data)
    })
    
  },[])

  
  return (
    <div id="project" className=" max-w-7xl mx-auto my-14 ">
      <h4 className="text-6xl font-bold text-center py-8">My Project</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
      {
        projects.map(project =>(<ProjectsCard key={project.id}
        project={project}
        ></ProjectsCard>))
      }
      </div>


    </div>
  );
};


export default Projects;
/*
<div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <div className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
          <img
            src="https://i.ibb.co/k4LNp1x/education-care-16fe2-web-app-2.png"
            alt=""
            className="object-cover object-top w-full"
          />
        </div>
      </div>
      <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
            Education care
          </h2>
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
            Online course
          </h2>
        </div>
        <p className="my-3 text-2xl  dark:text-gray-400">
          Single page Application | Course Upload, Delete, Update. User buy this
          course .
        </p>
      </div>
      <div className="tech   p-5 relative border-t border-white/10 ">
        <p className="uppercase dark:text-gray-400">
          <span className="font-bold">Technology: </span>
          <p className="text-2xl font-semibold">
            HTML, CSS, Javascript, React JS, Axios, jwt
          </p>
        </p>

        <div data-aos="fade-up" className="flex justify-between mt-2 ">
          <Link to="https://education-care-16fe2.web.app/">
            <button className="myBtn px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
             
              Live Link
            </button>
          </Link>
          <button className="myBtn px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            Details
          </button>
          <Link to="https://github.com/joykbiswas/educaiton-care">
            <button className="myBtn px-6 py-2 bg-btn-grad flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <FaGithub /> Github
            </button>
          </Link>
        </div>
      </div>
    </div>
*/
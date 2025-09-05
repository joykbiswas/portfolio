import "./style.css";


import { useEffect, useState,  } from "react";
// import ProjectsCard from "./ProjectCard";
// import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const [projects, setProjects] =useState([])
  useEffect(() =>{
    fetch("./document.json")
    .then(res =>res.json())
    .then(data=>{
      console.log(data)
      setProjects(data)
    })
    
  },[])

  
  return (
    <div id="project" className="max-w-7xl mx-auto my-16 px-4">
      <div className="text-center mb-16">
        <h4 className="text-6xl max-sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h4>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore my portfolio of web applications built with modern technologies
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="transform transition-all duration-500 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Projects;

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
    <div id="project" className=" max-w-7xl mx-auto my-14 ">
      <h4 className="text-6xl font-bold text-center py-8">My Project</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
        {
          projects.map(project=>(<ProjectCard key={project.id} project={project}></ProjectCard>))
        }
     
      </div>


    </div>
  );
};


export default Projects;

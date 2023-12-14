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


     {/* first project
     <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
      >
        <div className="relative w-full h-60 overflow-hidden">
          <div className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
            <img
              src="https://i.ibb.co/bvFFH9x/survey-scribe.png"
              alt=""
              className="object-cover object-top w-full"
            />
          </div>
        </div>
        <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
            Survey Scribe
            </h2>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
            Online survey
            </h2>
          </div>
          <p className="my-3 dark:text-gray-400">
          SurveyScribe: Streamlined survey platform for Admins, Surveyors, Pro-Users, and regular Users. Earn rewards for participation. Join for a simple survey experience and rich rewards!
          </p>
        </div>
        <div className="tech  p-5 relative border-t border-white/10">
          <p className="uppercase dark:text-gray-400">
            
            <span className="font-bold">Technology: </span>
            HTML, CSS, JAVASCRIPT, REACT JS, AXIOS, JWT
          </p>
          <div data-aos="fade-up" className="flex justify-between mt-2 gap-2 ">
            <Link to='https://survey-scribe.web.app/'>
              
              <button className="myBtn px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                
                Live Link
              </button>
            </Link>
            <Link to='https://github.com/joykbiswas/survey-scribe-client'>
              
              <button className="myBtn px-4 py-2  flex items-center gap-1 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold" >
                <FaGithub className="text-3xl"/> Github Client
              </button>
            </Link>

            <Link to="https://github.com/joykbiswas/survey-scribe-server">
             
              <button className="myBtn px-4 py-2 text-sm  flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                <FaGithub className="text-3xl" /> Github Server
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      {/* second project */}
      {/* <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
      >
        <div className="relative w-full h-60 overflow-hidden">
          <div className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
            <img
              src="https://i.ibb.co/3f2NY6P/markethub.png"
              alt=""
              className="object-cover object-top w-full"
            />
          </div>
        </div>
        <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
            Marketeers Hub
            </h2>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
            Project Bid
            </h2>
          </div>
          <p className="my-3 dark:text-gray-400">
          MarketerHub: Effortless Project Bidding! Explore, bid, and win with ease. Set your terms, maximize opportunities. Redefine project success—Join now!
          </p>
        </div>
        <div className="tech  p-5 relative border-t border-white/10">
          <p className="uppercase dark:text-gray-400">
            
            <span className="font-bold">Technolohy: </span>
            HTML, CSS, JAVASCRIPT, REACT JS, AXIOS, JWT
          </p>
          <div data-aos="fade-up" className="flex justify-between mt-2 gap-2 ">
            <Link to="https://joyportfolip.surge.sh/">
              
              <button className="myBtn px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                
                Live Link
              </button>
            </Link>
            <Link to="https://github.com/joykbiswas/marketeersHub-auth-jwt-client">
              
              <button className="myBtn px-4 py-2  flex items-center gap-1 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                <FaGithub className="text-3xl"/> Github Client
              </button>
            </Link>

            <Link to="https://github.com/joykbiswas/marketeersHub-auth-jwt-server">
             
              <button className="myBtn px-4 py-2 text-sm  flex items-center gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                <FaGithub className="text-3xl" /> Github Server
              </button>
            </Link>
          </div>
        </div>
      </div> */}
       {/* third project */}
       {/* <div
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
          <p className="my-3 dark:text-gray-400">
          EducationCare: Unlock Learning Excellence! Explore diverse online courses, enroll seamlessly with our user-friendly platform. Effortless payments, endless educational opportunities.
          </p>
        </div>
        <div className="tech  p-5 relative border-t border-white/10">
          <p className="uppercase dark:text-gray-400">
            
            <span className="font-bold">Technology: </span>
            HTML, CSS, Tailwind css, JAVASCRIPT, REACT JS
          </p>
          <div data-aos="fade-up" className="flex justify-between mt-2 gap-2 ">
            <Link to="https://education-care-16fe2.web.app/">
              
              <button className="myBtn px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                
                Live Link
              </button>
            </Link>
            <Link to="https://github.com/joykbiswas/educaiton-care">
              
              <button className="myBtn px-4 py-2  flex items-center gap-1 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white font-bold">
                <FaGithub className="text-3xl"/> Github Client
              </button>
            </Link>
          </div>
        </div>
      </div> */}
     
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
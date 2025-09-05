import img1 from "../assets/html5.png";
import img2 from "../assets/css-logo.png";
import img3 from "../assets/es6s.png";
import img4 from "../assets/tailwindcss.png";
import img5 from "../assets/JavaScript-logo.png";
import img6 from "../assets/react.png";
import img7 from "../assets/firebase.png";
import img88 from "../assets/mongodbb.png";
import img9 from "../assets/Node.png";
import img10 from "../assets/express-.png";
import img11 from "../assets/jwt-token.png";
import next from "../assets/next-js.png";
import postMan from "../assets/postman.png";
import daisy from "../assets/daisy.png";
import github from "../assets/github.png";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto my-14"
      style={{ backgroundImage: 'url("../assets/backgrond.jpg")' }}
    >
      <div className="text-6xl max-sm:text-4xl font-bold text-center my-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        About Me
      </div>
      <div className="space-y-12 max-md:m-2">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 max-md:p-3 border border-gray-700/50 shadow-2xl">
          <h4 className="text-3xl font-semibold mt-4 text-white">
            Hi, I am <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Joy Kumar Biswas</span>
          </h4>
          <p className="pt-4 text-xl text-gray-300 leading-relaxed">
            I am Joy Kumar Biswas, a skilled <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with over two
            years of experience in crafting dynamic, responsive, and
            user-focused web applications. Proficient in <span className="text-green-400 font-semibold">HTML, CSS, Tailwind
            CSS, JavaScript, Typescript, React.js, Next.js, RTK Query, Node.js, Express.js, and
            MongoDB</span>, I excel in building scalable solutions with clean code and
            optimized performance. I also have professional experience at <span className="text-purple-400 font-semibold">The
            Codxign, Tann Mann Foundation, Flex Soft </span>, where I further honed my technical and
            collaborative skills.
            <br /><br />
            In my journey as a developer, I have actively engaged in internships
            and collaborative projects. Additionally, I've contributed
            significantly to projects involving <span className="text-yellow-400 font-semibold">payment systems, dynamic
            dashboards, and collaborative tools</span>. Sharpening my ability to adapt
            and excel in diverse team environments. Dedicated to continuous
            learning, I strive to deliver innovative and impactful solutions in
            every project.
          </p>
        </div>

        {/* Bio data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-md:m-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">👤</span>
              </div>
              <h5 className="text-blue-300 font-semibold text-lg">Name</h5>
            </div>
            <p className="text-white font-bold text-xl">Joy Kumar Biswas</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">📧</span>
              </div>
              <h5 className="text-green-300 font-semibold text-lg">Email</h5>
            </div>
            <p className="text-white font-bold text-lg break-all">joykumarbiswas100@gmail.com</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎂</span>
              </div>
              <h5 className="text-purple-300 font-semibold text-lg">Birth Date</h5>
            </div>
            <p className="text-white font-bold text-xl">24 July, 2000</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">📍</span>
              </div>
              <h5 className="text-yellow-300 font-semibold text-lg">Location</h5>
            </div>
            <p className="text-white font-bold text-lg">Satkhira, Khulna, Bangladesh</p>
          </div>
        </div>

        {/* Experience section */}
        <div>
          <h3 className="text-6xl max-sm:text-4xl font-bold text-center my-9 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h3>
          <div className="flex justify-center flex-wrap gap-6 mt-8">
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img6} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">React</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-xl border border-gray-400/30 hover:border-gray-400/60 shadow-lg hover:shadow-gray-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={next} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Next.js</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 shadow-lg hover:shadow-yellow-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img5} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Javascript</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl border border-green-400/30 hover:border-green-400/60 shadow-lg hover:shadow-green-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img88} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">MongoDB</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-xl border border-green-600/30 hover:border-green-600/60 shadow-lg hover:shadow-green-600/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img9} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Node.js</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img4} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Tailwind CSS</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 shadow-lg hover:shadow-yellow-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img3} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">ES6</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl border border-red-400/30 hover:border-red-400/60 shadow-lg hover:shadow-red-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img1} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">HTML5</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img2} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">CSS3</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-slate-500/20 to-gray-500/20 backdrop-blur-sm rounded-xl border border-slate-400/30 hover:border-slate-400/60 shadow-lg hover:shadow-slate-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img10} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Express.js</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border border-yellow-500/30 hover:border-yellow-500/60 shadow-lg hover:shadow-yellow-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={img7} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">FireBase</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-500/60 shadow-lg hover:shadow-orange-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-28 mx-auto" src={postMan} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">PostMan</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-teal-400/30 hover:border-teal-400/60 shadow-lg hover:shadow-teal-500/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-16 mx-auto" src={daisy} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Daisy UI</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-blue-700/20 to-indigo-600/20 backdrop-blur-sm rounded-xl border border-blue-700/30 hover:border-blue-700/60 shadow-lg hover:shadow-blue-700/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-20 mx-auto" src={img11} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">JWT Token</h2>
            </div>
            <div className="w-56 max-sm:w-40 hover:scale-110 text-center space-y-3 bg-gradient-to-br from-gray-700/20 to-black/20 backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-gray-600/60 shadow-lg hover:shadow-gray-600/25 p-6 transform transition-all duration-300 hover:shadow-2xl">
              <img className="w-20 mx-auto" src={github} alt="" />
              <h2 className="text-2xl max-sm:text-xl text-white font-bold">Github</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

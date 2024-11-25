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
      <div className="text-6xl font-bold text-center my-6 ">About Me</div>
      <div className="space-y-12 m-3">
        <div>
          <h4 className="text-3xl font-semibold mt-4">
            Hi, I am <span className="font-bold text-blue-600">Joy Kumar Biswas</span>
          </h4>
          <p className="pt-2 text-2xl">
            I am Joy Kumar Biswas, a skilled MERN Stack Developer with over two
            years of experience in crafting dynamic, responsive, and
            user-focused web applications. Proficient in HTML, CSS, Tailwind
            CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and
            MongoDB, I excel in building scalable solutions with clean code and
            optimized performance. I also have professional experience at The
            Tann Mann Foundation, where I further honed my technical and
            collaborative skills.
            <br />
            In my journey as a developer, I have actively engaged in internships
            and collaborative projects. Additionally, I’ve contributed
            significantly to projects involving payment systems, dynamic
            dashboards, and collaborative tools. sharpening my ability to adapt
            and excel in diverse team environments. Dedicated to continuous
            learning, I strive to deliver innovative and impactful solutions in
            every project.
          </p>
        </div>

        {/* Bio data */}
        <div className="flex flex-wrap justify-between space-y-4">
          <div className="text-2xl">
            <h5 className="text-slate-600">Name:</h5>
            <p className="font-semibold max-md:text-xl">Joy Kumar Biswas</p>
          </div>
          <div className="text-2xl">
            <h5 className="text-slate-600">Email:</h5>
            <p className="font-semibold max-md:text-xl">
              joykumarbiswas100@gmail.com
            </p>
          </div>
          <div className="text-2xl">
            <h5 className="text-slate-600">Date of birth:</h5>
            <p className="font-semibold max-md:text-xl">24 july, 2000</p>
          </div>
          <div className="text-2xl">
            <h5 className="text-slate-600">From:</h5>
            <p className="font-semibold max-md:text-xl">
              Satkhira, Khulna, Bangladesh
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-6xl font-bold text-center my-9">Experience</h3>
          <div className="flex justify-center flex-wrap gap-5 mt-6">
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-blue-300 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img6} alt="" />
              <h2 className="text-2xl">React</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-slate-400 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={next} alt="" />
              <h2 className="text-2xl">Next.js</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-yellow-300 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img5} alt="" />
              <h2 className="text-2xl">Javascript</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-green-300 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img88} alt="" />
              <h2 className="text-2xl">MongoDB</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-green-800 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img9} alt="" />
              <h2 className="text-2xl">Node.js</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-blue-300 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img4} alt="" />
              <h2 className="text-2xl">Tailwind css</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-yellow-400 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img3} alt="" />
              <h2 className="text-2xl">ES6</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-red-300 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img1} alt="" />
              <h2 className="text-2xl">HTML5</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-blue-400 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img2} alt="" />
              <h2 className="text-2xl">CSS3</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-slate-400 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img10} alt="" />
              <h2 className="text-2xl">Express.js</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-yellow-500 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={img7} alt="" />
              <h2 className="text-2xl">FireBase</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-orange-500 shadow-md p-4 transform transition duration-300">
              <img className="w-28 mx-auto" src={postMan} alt="" />
              <h2 className="text-2xl">PostMan</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-teal-300 shadow-md p-4 transform transition duration-300">
              <img className="w-16 mx-auto" src={daisy} alt="" />
              <h2 className="text-2xl">Daisy UI</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-blue-700 shadow-md p-4 transform transition duration-300">
              <img className="w-20 mx-auto" src={img11} alt="" />
              <h2 className="text-2xl">JWT Token</h2>
            </div>
            <div className="w-56 hover:scale-110 text-center space-y-3 border shadow-black shadow-md p-4 transform transition duration-300">
              <img className="w-20 mx-auto" src={github} alt="" />
              <h2 className="text-2xl">Github</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

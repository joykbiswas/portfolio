import img1 from "../assets/html5.png";
import img2 from "../assets/css-logo.png";
import img3 from "../assets/es6.jpg";
import img4 from "../assets/tailwindcss.png";
import img5 from "../assets/js.jpg";
import img6 from "../assets/react.png";
import img7 from "../assets/firebase.png";
import img8 from "../assets/mongodb0.png";
import img9 from "../assets/nodejs.png";
import img10 from "../assets/express-js-3.png";
import img11 from "../assets/jwt.png";
import img12 from "../assets/axios-93a4b665.png";

const About = () => {
  return (
    <div id='about' className="max-w-7xl mx-auto my-14">
      <div className="text-6xl font-bold text-center my-6 ">About Me</div>
      <div className="space-y-12 m-3">
        <div>
          <h4 className="text-3xl font-semibold mt-4">
            Hi, I am <span className="font-bold">JOY Biswas</span>
          </h4>
          <p className="pt-2 text-2xl">
            I am a Frontend developer with 1.5 years of expertise in building
            industry-level web applications. I am expertise in React and
            Tailwind CSS. Proficent in modern web tecnologies, including React
            for building dynamic user interface, Tailwind CSS for effecient
            styling, and Firebase for seamless backend integration. Experienced
            in working with databases such as MongoDB and server-side
            technologies like Express JS. I cultivated through hands on
            experience with Figma.Eager to contribute my skills to innovative
            project. Dedicated to delivering polished, responsive designs with a
            focus on user experience.
          </p>
        </div>

        {/* Bio data */}
        <div className="flex flex-wrap justify-between space-y-4">
          <div className="text-2xl">
            <h5 className="text-slate-600">Name:</h5>
            <p className="font-semibold">Joy Kumar Biswas</p>
          </div>
          <div className="text-2xl">
            <h5 className="text-slate-600">Email:</h5>
            <p className="font-semibold">joykumarbiswas100@gmail.com</p>
          </div>
          <div className="text-2xl">
            <h5 className="text-slate-600">Date of birth:</h5>
            <p className="font-semibold">24 july, 2000</p>
          </div>
          <div className="text-2xl">
            <h5 className="text-slate-600">From:</h5>
            <p className="font-semibold">Satkhira, Khulna, Bangladesh</p>
          </div>
        </div>

        {/* Expertise section */}
        <div>
          <h2 className="text-4xl font-semibold">Expertise</h2>
          <div className="flex flex-wrap gap-12 mt-6">
            <img className="w-16" src={img1} alt="" />
            <img className="w-16" src={img2} alt="" />
            <img className="w-16" src={img3} alt="" />
            <img className="w-16" src={img4} alt="" />
            <img className="w-16" src={img5} alt="" />
            <img className="w-16" src={img6} alt="" />
            <img className="w-16" src={img7} alt="" />
            <img className="w-16" src={img8} alt="" />
          </div>
        </div>
        {/* Comfortable section */}
        <div>
          <h4 className="text-4xl font-semibold ">Comfortable</h4>
          <div className="flex flex-wrap gap-12 mt-6">
            <img className="w-28" src={img9} alt="" />
            <img className="w-28" src={img10} alt="" />
            <img className="w-28" src={img11} alt="" />
            <img className="w-28" src={img12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

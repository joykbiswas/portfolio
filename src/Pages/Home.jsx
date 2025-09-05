import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HomeBanner from "../Components/HomeBanner";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume";
import "./homeStyle.css"
import ParticleBg from "../Components/ParticleBg/ParticleBg";
import JumpButton from "../Components/Jump/JumpButton";
import ParticlesComponent from "../Components/paticles-animation/ParticlesComponent";
const Home = () => {
  return (
    <div  className='max-w-8xl bg_gradient  mx-auto'>
      
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ParticlesComponent />
      {/* <ParticleBg /> */}
      <JumpButton />
      
    </div>
  );
};

export default Home;

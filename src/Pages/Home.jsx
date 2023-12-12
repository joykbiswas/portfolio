import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HomeBanner from "../Components/HomeBanner";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
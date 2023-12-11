import About from "../Components/About";
import Contact from "../Components/Contact";
import HomeBanner from "../Components/HomeBanner";
import Navbar from "../Components/Navbar";
import Resume from "../Components/Resume";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
};

export default Home;
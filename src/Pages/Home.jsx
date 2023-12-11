import About from "../Components/About";
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
    </div>
  );
};

export default Home;
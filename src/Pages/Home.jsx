import About from "../Components/About";
import HomeBanner from "../Components/HomeBanner";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <About></About>
    </div>
  );
};

export default Home;
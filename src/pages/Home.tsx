import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeAboutus from "../components/HomeAboutus";
import Navbar from "../components/Navbar";
import HomeStats from "../components/ui/HomeStats";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAboutus/>
      <HomeStats/>
      <Footer/>
    </>
  );
}

export default Home;

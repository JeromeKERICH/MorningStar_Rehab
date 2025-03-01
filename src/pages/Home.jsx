import About from "../components/home/About";
import AnonymousCounseling from "../components/home/Anonymous";
import LatestBlog from "../components/home/BlogsHome";
import Contact from "../components/home/Contact";
import DonateSection from "../components/home/Donate";
import Hero from "../components/home/HeroSection";
import ServicesOverview from "../components/home/Services";
import SocialMediaSection from "../components/home/Social";

const Home = () => {
    return (
      <div>
        <Hero />
        <About />
        <ServicesOverview />
        <AnonymousCounseling />
        <DonateSection />
        <LatestBlog />
        <SocialMediaSection />
        <Contact />
      </div>
    );
  };
  
  export default Home;
  
import Intro from  "../components/intro-hero/Intro";
import AboutMe from "../components/about-me/AboutMe";
import CarouselWithInfo from "../components/projects-display/CarouselWithInfo";
import ContactMe from "../components/contact-me/ContactMe";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <CarouselWithInfo />
      <ContactMe />
      <Footer />
    </div>
  );
}

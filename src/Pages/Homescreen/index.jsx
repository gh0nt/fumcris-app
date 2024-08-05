import AboutUs from "../AboutUs";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../Portfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Testimonial/>
      <MySkills />
      <ContactMe />

    </>
  );
}
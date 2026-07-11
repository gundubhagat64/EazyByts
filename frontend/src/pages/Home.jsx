import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
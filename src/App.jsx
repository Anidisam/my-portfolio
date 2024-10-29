import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Services id="services" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </>
  );
}

export default App;

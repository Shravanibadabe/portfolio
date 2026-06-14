import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
<Hero />
<About />
<Experience />
<Skills />
<Stats />
<FeaturedProject />
<Projects />
<Education />
<Certifications />
<Contact />
<Footer />
    </>
  );
}

export default App;
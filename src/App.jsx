import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Counters from "./components/Counters";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <DarkModeToggle />
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Counters />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
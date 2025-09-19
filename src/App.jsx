import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    function updateNav() {
      const nav = document.querySelector('nav');
      if (!nav) return;
      document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
    }
    updateNav();
    window.addEventListener('resize', updateNav);
    return () => window.removeEventListener('resize', updateNav);
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-offset">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
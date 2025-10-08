import React, { useEffect } from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Project from "./component/Project";
import TechStack from "./component/TechStack";
import WhatIDo from "./component/WhatIDo";
import Lenis from "@studio-freight/lenis";
import Final from "./component/Final";
import Footer from "./component/Footer"

const App = () => {
  // Inisialisasi Lenis untuk smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []); // <-- Array kosong memastikan ini hanya berjalan sekali

  return (
  <>
  <Navbar />
  <Hero />
  <AboutMe />
  <Project />
  <TechStack />
  <WhatIDo />
  <Final/>
  <Footer/>
  
  </>
    // <main>
    // </main>
  );
};

export default App;

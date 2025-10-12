import React, { useEffect } from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Project from "./component/Project";
import TechStack from "./component/TechStack";
import WhatIDo from "./component/WhatIDo";
import Lenis from "@studio-freight/lenis";
import Final from "./component/Final";
import Footer from "./component/Footer";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Inisialisasi Lenis untuk smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []); // <-- Array kosong memastikan ini hanya berjalan sekali

  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative z-20 bg-[#f3f3f3]">
        <AboutMe />
        <Project />
      </div>
      <TechStack />
      <WhatIDo />
      <Final />
      <Footer />
    </>
    // <main>
    // </main>
  );
};

export default App;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Final = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for change color animate
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000", // scroll duration when "pin" active
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Step 1: light -> dark (background)
      tl.to(sectionRef.current, {
        backgroundColor: "#0c0c0c",
        duration: 1,
        ease: "power2.inOut",
      });

      // Step 2: light -> dark (text)
      tl.to(
        textRef.current,
        {
          color: "#ffffff",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<" // berjalan bersamaan dgn background
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center w-screen h-screen"
    >
      <h1 ref={textRef} className="text-3xl text-black">
        we are <span className="italic font-geistmono-regular">NOVEL</span>
      </h1>
    </section>
  );
};

export default Final;

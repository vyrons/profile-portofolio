import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Final = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <h1 ref={textRef} className="text-xl">
        we are{" "}
        <span className="italic font-geistmono-regular">
          NOVEL
        </span>
      </h1>
    </div>
  );
};

export default Final;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "words" });

    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section id="about">
      <div className="flex justify-center p-10">
        <div className="mt-[200px]">
          <h1 className="font-geistmono-light text-[20px]">About Me</h1>
          <p ref={textRef} className="font-geist-medium font-bold text-3xl">
            I'm a Software Engineering student <br /> with a strong passion for
            graphic design, UI design, <br /> and frontend development. <br />I
            enjoy crafting visually appealing <br />
            and user-friendly digital experiences, <br /> combining creativity
            with technical skills. <br /> Currently, I'm exploring the world of
            web development, <br />
            aiming to bridge the gap between design <br /> and technology to
            build products that are both <br /> functional and beautiful.
          </p>
        </div>
        <div ref={imageRef} className="rounded-2xl w-[300px] h-[200px] ml-20 mt-[200px]">
          <img
            src="/img/about.jpg"
            alt="about"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

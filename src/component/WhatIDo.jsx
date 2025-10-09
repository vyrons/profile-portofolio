import React, { useEffect, useRef } from "react";
import { ReactTyped as Typed } from "react-typed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  const scrambleText = (element, finalText, duration = 1) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    const iterations = Math.floor(duration * 60);
    let frame = 0;

    const interval = setInterval(() => {
      const scrambled = finalText
        .split("")
        .map((char, i) => {
          if (i < (frame / iterations) * finalText.length) return finalText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      element.textContent = scrambled;

      if (frame++ >= iterations) {
        clearInterval(interval);
        element.textContent = finalText;
      }
    }, 1000 / 60);
  };

  useEffect(() => {
    const elements = textRefs.current;

    elements.forEach((el) => {
      // Scrambletext + direction + fade in
      const text = el.dataset.text;
      el.textContent = "";

      const isleft = el.classList.contains("from-left");
      const direction = isleft ? -100 : 100;

      gsap.fromTo(
        el,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
            onEnter: () => scrambleText(el, text, 2),
            onEnterBack: () => scrambleText(el, text, 2),
          },
          onEnter: () => scrambleText(el, text, 2),
        }
      );
    });

    // fade in fade out img
    gsap.fromTo(
      ".whatido-img",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: ".whatido-img",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="mt-[150px]">
      <div className="flex justify-center">
        <h1 className="font-geistmono-light">
          <Typed
            strings={["WHAT I DO", "我做什么"]}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </h1>
      </div>

      <div className="flex justify-center mt-5">
        <div className="relative min-h-[600px]">
          <div className="h-[300px] w-[310px] ">
            <img src="/img/whatido.jpeg" alt="" className="whatido-img"/>
          </div>

          <div className="absolute font-geist-regular italic top-5 left-[340px] w-[250px]">
            <p
              ref={(el) => el && textRefs.current.push(el)}
              data-text="Evolving with every brief and built for impact, my process spans
              design, development, and brand strategy— aligning vision with
              execution to bring clarity and edge to every project."
            ></p>
          </div>

          <div className="text-right absolute top-[125px] right-[400px] w-[250px]">
            <h1
              className="font-geistmono-regular font-bold"
              ref={(el) => el && textRefs.current.push(el)}
              data-text="[01] Frontend Development"
            ></h1>
            <p
              className="mt-2 font-geist-regular italic"
              ref={(el) => el && textRefs.current.push(el)}
              data-text="Crafting responsive, high-performance websites using modern tools
              like Vite, React, Tailwind, and JavaScript. Focused on structure,
              accessibility, and visual precision."
            ></p>
          </div>

          <div className="absolute top-[250px] left-[400px] w-[250px]">
            <h1
              className="font-geistmono-regular font-bold"
              ref={(el) => el && textRefs.current.push(el)}
              data-text="[02] UI Design & Prototyping"
            ></h1>
            <p
              className="mt-2 font-geist-regular italic"
              ref={(el) => el && textRefs.current.push(el)}
              data-text="Designing clean and minimal interfaces in Figma, ensuring a smooth
              handoff from concept to code. Balancing usability with aesthetic
              appeal."
            ></p>
          </div>

          <div className="text-right absolute top-[380px] right-[340px] w-[250px]">
            <h1
              className="font-geistmono-regular font-bold"
              ref={(el) => el && textRefs.current.push(el)}
              data-text="[03] Animation & Interaction"
            ></h1>
            <p
              className="mt-2 font-geist-regular italic"
              ref={(el) => el && textRefs.current.push(el)}
              data-text="Enhancing user experience through fluid motion using GSAP and
              modern web animation techniques. Creating interactions that feel
              intuitive and dynamic."
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const text = element.textContent;
    element.textContent = "";

    // Bungkus tiap huruf dalam <span>
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.position = "relative";
      element.appendChild(span);
    });

    const letters = element.querySelectorAll("span");
    const randomOrder = gsap.utils.shuffle([...letters]);

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        const tl = gsap.timeline();

        // 1Huruf keluar ke atas
        tl.to(randomOrder, {
          y: "-120%",
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
          stagger: { each: 0.05, from: "random" },
        });

        // Huruf baru muncul dari bawah
        tl.set(randomOrder, { y: "120%", opacity: 0 }); // siapkan posisi bawah
        tl.to(
          randomOrder,
          {
            y: "0%",
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: { each: 0.05, from: "random" },
          },
          "+=0.2"
        );
      },

      onEnterBack: () => {
        // Saat scroll balik ke atas => huruf muncul dari bawah saja
        gsap.set(randomOrder, { y: "120%", opacity: 0 }); // sembunyikan di bawah
        gsap.to(randomOrder, {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: { each: 0.05, from: "random" },
        });
      },

      onLeave: () => {
        // Saat keluar dari view ke bawah, reset agar siap diulang
        gsap.set(randomOrder, { y: "0%", opacity: 1 });
      },
    });
  }, []);

  return (
    <section className="mt-[150px]">
      <div className="flex justify-center overflow-hidden">
        <h1
          ref={textRef}
          className="text-[150px] font-geist-medium font-bold text-black overflow-hidden"
        >
          TECH STACK
        </h1>
      </div>

      
    </section>
  );
};

export default TechStack;

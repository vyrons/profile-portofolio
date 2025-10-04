import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TechStackLogo from "./TechStackLogo";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const mystack = [
    { name: "React", icon: "react" },
    { name: "Vite", icon: "vite" },
    { name: "Figma", icon: "figma" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Vercel", icon: "vercel" },
    { name: "GSAP", icon: "greensock" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Bun", icon: "bun" },
    { name: "NPM", icon: "npm" },
  ];

  const textRef = useRef(null);
  const highlightRef = useRef(null);
  const logoRef = useRef([]);

  useEffect(() => {
    const element = textRef.current;
    const text = element.textContent;
    const highlight = highlightRef.current;
    const boxes = logoRef.current;
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

    // hiden highlight
    gsap.set(highlight, { opacity: 0, scale: 0.95 });

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", (e) => {
        const rect = box.getBoundingClientRect();

        // animasikan highlight menuju posisi elemen yang di-hover
        gsap.to(highlight, {
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY,
          width: rect.width,
          height: rect.height,
          opacity: 0.25,
          scale: 1,
          ease: "power3.out",
          duration: 0.4,
        });
      });

      box.addEventListener("mouseleave", () => {
        // sembunyikan highlight saat keluar
        gsap.to(highlight, {
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
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

      <div className="pl-10 mt-20">
        <h1 className="font-geistmono-light">WHAT I WORK WITH</h1>
      </div>

      <div>
        {/* highlig */}
        <div
          ref={highlightRef}
          id="highlight"
          className="absolute bg-zinc-800 pointer-events-none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        ></div>

        {/* first set container */}
        <div className="flex justify-center mt-5 pl-10 pr-10 relative z-20">
          <div
            ref={(el) => (logoRef.current[0] = el)}
            className="flex justify-center items-center h-[240px] w-[400px] border-zinc-300 border-2 border-r-0 border-l-0 border-t-0 "
          >
            <TechStackLogo stack={[{ name: "React", icon: "react" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[1] = el)}
            className="flex justify-center items-center h-[240px] w-[400px] border-zinc-300 border-2 border-t-0"
          >
            <TechStackLogo stack={[{ name: "Next.js", icon: "nextdotjs" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[2] = el)}
            className="flex justify-center items-center h-[240px] w-[400px] border-zinc-300 border-2 border-l-0 border-r-0 border-t-0"
          >
            <TechStackLogo
              stack={[{ name: "Javascript", icon: "javascript" }]}
            />
          </div>
        </div>

        <div className="flex justify-center">
          {/* hightliggt */}
          <div
            ref={highlightRef}
            id="highlight"
            className="absolute bg-zinc-800 pointer-events-none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          ></div>

          {/* container set  2 */}
          <div
            ref={(el) => (logoRef.current[3] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-r-0 border-b-0"
          >
            <TechStackLogo
              stack={[{ name: "Tailwind", icon: "tailwindcss" }]}
            />
          </div>
          <div
            ref={(el) => (logoRef.current[4] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-r-0 border-b-0"
          >
            <TechStackLogo stack={[{ name: "GSAP", icon: "gsap" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[5] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-r-0 border-b-0"
          >
            <TechStackLogo stack={[{ name: "Bun", icon: "bun" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[6] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-r-0 border-b-0"
          >
            <TechStackLogo stack={[{ name: "Vercel", icon: "vercel" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[7] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-r-0 border-b-0"
          >
            <TechStackLogo stack={[{ name: "NPM", icon: "npm" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[8] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-r-0 border-b-0"
          >
            <TechStackLogo stack={[{ name: "Vite", icon: "vite" }]} />
          </div>
          <div
            ref={(el) => (logoRef.current[9] = el)}
            className="flex justify-center items-center h-[190px] w-[400px] border-zinc-300 border-2 border-t-0 border-b-0"
          >
            <TechStackLogo stack={[{ name: "Figma", icon: "figma" }]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

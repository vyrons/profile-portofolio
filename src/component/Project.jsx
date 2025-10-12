import React, { useEffect, useRef, useState } from "react";
import Avatar from "boring-avatars";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactTyped as Typed } from "react-typed";

gsap.registerPlugin(ScrollTrigger);

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Placeholder */}
      <div
        className={`absolute inset-0 bg-zinc-500 rounded-lg animate-pulse transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Gambar Asli */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className || ""}`}
      />
    </div>
  );
};

const splitText = (el) => {
  if (!el) return;
  const chars = el.textContent.split("");
  el.innerHTML = chars
  .map(
    (c) =>
      `<span class="inline-block translate-y-[100%] opacity-0 will-change-transform">${c}</span>`
  )
  .join("");
  return el.querySelectorAll("span");
};

const Project = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);


  const typedString = {
    topProject1: [
      "TAILWIND CSS · REACT JS · GSAP · LANDING PAGE · FANMADE DESIGN · FUTURISTIC",
    ],
    topProject2: ["NEXT JS · OPENAI · OAUTH · POSTGRE NEON DB · DIET WEB APP"],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // split work & 25'
      const titles = [cardRefs.current[0], cardRefs.current[1]];
      titles.forEach((title) => {
        const letters = splitText(title);
        if (!letters) return;
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // card animate
      gsap.utils.toArray(cardRefs.current.slice(2)).forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: "01",
      title: "YOURFIT",
      desc: "ONLINE OUTFIT SHOP",
      img: "/img/project3.webp",
      tech: ["WEB", "HTML", "CSS", "JS"],
      link: "https://xzeonz.github.io/Yourfit-Outfit-Shop/",
    },
    {
      id: "02",
      title: "RASKITA",
      desc: "CAT AND DOG BREED CLASSIFIER",
      img: "/img/project4.webp",
      tech: ["WEB", "EFFICIENTNET_B0", "MACHINE LEARNING", "PYTHON", "FASTAPI"],
      link: "https://github.com/xzeonz/RasKita-1.1.0.git",
    },
    {
      id: "03",
      title: "DIGIARCH",
      desc: "MINI DIGIMON JS FETCH API PROJECT",
      img: "/img/project5.webp",
      tech: ["WEB", "FETCH API", "HTML", "CSS", "JS"],
      link: "https://codesandbox.io/p/sandbox/modest-gould-lsry2h",
    },
    {
      id: "04",
      title: "YOURNOTE.",
      desc: "Notes Project",
      img: "/img/project6.webp",
      tech: ["WEB", "NEXT JS"],
      link: "https://your-note-psi.vercel.app/",
    },
  ];

  return (
    <div ref={sectionRef} className="px-4 sm:px-6 md:px-10 mt-[100px]">
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[60%] mb-10">
        <h1
          ref={(el) => (cardRefs.current[0] = el)}
          className="font-geist-medium font-bold text-[60px] sm:text-[80px] md:text-[100px] leading-none will-change-transform"
        >
          WORK
        </h1>
        <h1
          ref={(el) => (cardRefs.current[1] = el)}
          className="font-geist-medium font-bold text-[60px] sm:text-[80px] md:text-[100px] leading-none will-change-transform"
        >
          25'
        </h1>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-8">
        {/* container 1 */}
        <a
          href="https://hsr-3-6-landing-page-fanmade.vercel.app/"
          className="group border-2 bg-zinc-900 rounded-lg w-full sm:w-[48%] lg:w-[47.5%] h-auto md:h-[450px] hover:bg-stone-100 transition-colors hover:text-black"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <div className="w-[90%] max-w-[560px] mx-auto mt-4 aspect-video rounded-lg">
            <LazyImage
              src="/img/project1.webp"
              alt="HSR Fanmade Landing Page"
              className="will-change-transform"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start px-6 gap-4 sm:gap-[100px] md:gap-[130px]">
            <div className="flex items-center">
              <Avatar
                name="lorem"
                variant="marble"
                colors={["#92A1C6", "#F0AB3D", "#C271B4", "#C20D90", "#F8C0C8"]}
                size={32}
              />
              <h1 className="text-white group-hover:text-black font-geist-regular ml-3 text-sm sm:text-base">
                HSR 3.6 LANDINGPAGE FANMADE
              </h1>
            </div>

            <div className="flex gap-3 items-center justify-center sm:justify-end">
              <h1 className="text-white group-hover:text-black font-geist-regular italic text-sm sm:text-base">
                PROJECT
              </h1>
              <h1 className="text-white group-hover:text-black font-geist-regular font-bold text-sm sm:text-base">
                2025
              </h1>
            </div>
          </div>

          <div className="mt-5 px-6 pb-5">
            <p className="font-geistmono-light text-[11px] sm:text-xs text-white group-hover:text-black">
              <Typed
                strings={typedString.topProject1}
                typeSpeed={40}
                backSpeed={20}
                // showCursor={false}
                loop
              />
            </p>
          </div>
        </a>

        {/* container 2 */}
        <a
          href="https://body-goal-bocj.vercel.app/"
          className="group border-2 bg-zinc-900 rounded-lg w-full sm:w-[48%] lg:w-[47.5%] h-auto md:h-[450px] hover:bg-stone-100 transition-colors hover:text-black"
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <div className="w-[90%] max-w-[560px] mx-auto mt-4 aspect-video rounded-lg">
            <LazyImage
              src="/img/project2.webp"
              alt="HSR Fanmade Landing Page"
              className="will-change-transform"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start px-6 gap-4 sm:gap-[100px] md:gap-[130px]">
            <div className="flex items-center">
              <Avatar
                name="lorem"
                variant="marble"
                size={32}
                colors={["#FFB6C1", "#FFD670", "#98D8C8", "#6495ED", "#C8A2C8"]}
              />
              <h1 className="text-white group-hover:text-black font-geist-regular ml-3 text-sm sm:text-base">
                BODYGOAL
              </h1>
            </div>

            <div className="flex gap-3 items-center justify-center sm:justify-end">
              <h1 className="text-white group-hover:text-black font-geist-regular italic text-sm sm:text-base">
                PROJECT
              </h1>
              <h1 className="text-white group-hover:text-black font-geist-regular font-bold text-sm sm:text-base">
                2025
              </h1>
            </div>
          </div>

          <div className="mt-5 px-6 pb-5">
            <p className="font-geistmono-light text-[11px] sm:text-xs text-white group-hover:text-black">
              <Typed
                strings={typedString.topProject2}
                typeSpeed={40}
                backSpeed={20}
                // showCursor={false}
                loop
              />
            </p>
          </div>
        </a>
      </div>

      {/* More Projects */}
      <div className="mt-[100px] md:mt-[150px] flex justify-center">
        <div
          className="bg-zinc-900 w-full max-w-6xl rounded-lg h-auto px-3"
          ref={(el) => (cardRefs.current[4] = el)}
        >
          <div className="flex justify-center">
            <h1 className="text-white font-geistmono-light text-sm mt-5">
              More Project's
            </h1>
          </div>

          <div className="bg-zinc-800 w-full rounded-lg mt-5 mb-3">
            {projects.map((p, idx) => (
              <React.Fragment key={p.id}>
                <a href={p.link}>
                  <div className="flex flex-col sm:flex-row justify-between items-center p-6 sm:p-10 gap-5">
                    <div className="flex items-center gap-8 sm:gap-16">
                      <h1 className="text-zinc-500 font-geistmono-regular text-base sm:text-xl">
                        {p.id}
                      </h1>
                      <h1 className="text-white font-geist-medium font-bold text-2xl sm:text-4xl">
                        {p.title}
                      </h1>
                    </div>

                    <div className="w-full sm:w-[300px] text-center sm:text-left">
                      <h1 className="text-white font-geistmono-regular text-sm sm:text-base">
                        {p.desc}
                      </h1>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className={`${
                              t === "WEB" ||
                              t === "EFFICIENTNET_B0" ||
                              t === "MACHINE LEARNING"
                                ? "bg-stone-100 text-black"
                                : "bg-stone-600 text-white"
                            } text-xs font-geistmono-light px-3 py-0.5 rounded-md`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <img
                        src={p.img}
                        alt={`Project ${p.title}`}
                        loading="lazy"
                        decoding="async"
                        className="w-[180px] sm:w-[200px] rounded-lg mx-auto will-change-transform"
                      />
                    </div>
                  </div>
                </a>
                {idx < 3 && (
                  <div className="h-[1px] w-auto bg-zinc-700 mt-5 sm:mt-10"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

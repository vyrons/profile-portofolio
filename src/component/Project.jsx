import React, { useEffect, useRef } from "react";
import Avatar from "boring-avatars";
import { ReactTyped as Typed } from "react-typed";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // for 'work' and '25''
      const titles = [cardRef.current[0], cardRef.current[1]];

      titles.forEach((title, i) => {
        if (!title) return;

        const chars = title.textContent.split("");
        title.innerHTML = chars
          .map(
            (c) =>
              `<span class="inline-block translate-y-[100%] opacity-0">${c}</span>`
          )
          .join("");

        const letters = title.querySelectorAll("span");

        gsap.to(letters, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // for every project container
      cardRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 80%",
              scrub: false,
              onEnter: () =>
                gsap.to(card, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  delay: i * 0.1,
                }),
              onLeaveBack: () =>
                gsap.to(card, { opacity: 0, y: 80, duration: 0.8 }),
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="mt-[150px]">
        {/* title */}
        <div className="flex justify-center pl-10 pr-10 gap-[60%]">
          <h1
            className="font-geist-medium font-bold text-[100px]"
            ref={(el) => (cardRef.current[0] = el)}
          >
            WORK
          </h1>
          <h1
            className="font-geist-medium font-bold text-[100px]"
            ref={(el) => (cardRef.current[1] = el)}
          >
            25'
          </h1>
        </div>

        <div className="flex px-10 gap-3 items-center justify-center">
          {/* container 1 */}
          <a
            href="https://hsr-3-6-landing-page-fanmade.vercel.app/"
            className="group border-2 bg-zinc-900 rounded-lg w-[700px] h-[450px] hover:bg-stone-100 transition-colors hover:text-black "
            ref={(el) => (cardRef.current[2] = el)}
          >
            <div className="flex items-center justify-center mt-4 ">
              <img
                src="/img/project1.jpeg"
                alt="project1"
                className="w-[560px] rounded-lg"
              />
            </div>

            <div className="mt-6 flex justify-center gap-[130px]">
              <div className="flex items-center">
                <Avatar
                  name="Alice Paul"
                  variant="pixelsunsetring"
                  className="size-8"
                  color="#92A1C6"
                />
                <h1 className="text-white group-hover:text-black font-geist-regular ml-3">
                  HSR 3.6 LANDINGPAGE FANMADE
                </h1>
              </div>

              <div className="flex gap-3 items-center">
                <h1 className="text-white group-hover:text-black font-geist-regular italic">
                  PROJECT
                </h1>
                <h1 className="text-white group-hover:text-black font-geist-regular font-bold">
                  2025
                </h1>
              </div>
            </div>

            <div className="ml-5">
              <div className=" mt-5 w-[500px] h-[25px] text-white group-hover:text-black">
                <h1 className="font-geistmono-light text-sm">
                  <Typed
                    strings={[
                      "TAILWIND CSS, REACT JS, GSAP, LANDING PAGE, FANMADE DESIGN, MODERN UI, FUTURISTIC",
                    ]}
                    typeSpeed={40}
                    backSpeed={20}
                    loop
                  />
                </h1>
              </div>
            </div>
          </a>

          {/* container 2 */}
          <a
            href="https://body-goal-bocj.vercel.app/"
            className="group border-2 bg-zinc-900 rounded-lg w-[700px] h-[450px] hover:bg-stone-100 transition-colors hover:text-black"
            ref={(el) => (cardRef.current[3] = el)}
          >
            <div className="flex items-center justify-center mt-4 ">
              <img
                src="/img/project2.jpeg"
                alt="project2"
                className="w-[560px] rounded-lg"
              />
            </div>

            <div className="mt-6 flex justify-center gap-[300px]">
              <div className="flex items-center">
                <Avatar
                  name="Alice Paul"
                  variant="pixelsunsetring"
                  className="size-8"
                  color="#92A1C6"
                />
                <h1 className="text-white group-hover:text-black font-geist-regular ml-3">
                  BODYGOAL
                </h1>
              </div>

              <div className="flex gap-3 items-center">
                <h1 className="text-white group-hover:text-black font-geist-regular italic">
                  PROJECT
                </h1>
                <h1 className="text-white group-hover:text-black font-geist-regular font-bold">
                  2025
                </h1>
              </div>
            </div>

            <div className="ml-5">
              <div className=" mt-5 w-[500px] h-[25px] text-white group-hover:text-black">
                <h1 className="font-geistmono-light text-sm">
                  <Typed
                    strings={[
                      "NEXT JS, DIET WEB APP, OPENAI, OAUTH, POSTGRE NEON DB, CLASSIC WEB APP",
                    ]}
                    typeSpeed={40}
                    backSpeed={20}
                    loop
                  />
                </h1>
              </div>
            </div>
          </a>
        </div>

        <div className="flex px-10 mt-[150px] justify-center">
          <div
            className="bg-zinc-900 w-full rounded-lg h-auto px-3"
            ref={(el) => (cardRef.current[4] = el)}
          >
            <div className="flex justify-center">
              <h1 className="text-white font-geistmono-light text-sm mt-5">
                More Project's
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="bg-zinc-800 w-full rounded-lg mt-5 h-auto mb-3">
                <a href="https://xzeonz.github.io/Yourfit-Outfit-Shop/">
                  <div className="flex justify-between items-center p-10">
                    <div className="flex items-center gap-16">
                      <h1 className="text-zinc-500 font-geistmono-regular text-xl">
                        01
                      </h1>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        YOURFIT
                      </h1>
                    </div>
                    <div className="w-[300px]">
                      <h1 className="text-white font-geistmono-regular">
                        ONLINE OUTFIT SHOP
                      </h1>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          WEB
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          HTML
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          CSS
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          JS
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/img/project3.jpeg"
                        alt="Project YOURFIT"
                        className="w-[200px] rounded-lg"
                      />
                    </div>
                  </div>
                </a>

                <div className="h-[1px] w-auto bg-zinc-700 mt-10"></div>

                {/* Project 4 */}
                <a href="https://github.com/xzeonz/RasKita-1.1.0.git">
                  <div className="flex justify-between items-center p-10">
                    <div className="flex items-center gap-16">
                      <h1 className="text-zinc-500 font-geistmono-regular text-xl">
                        02
                      </h1>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        RASKITA
                      </h1>
                    </div>
                    <div className="w-[300px]">
                      <h1 className="text-white font-geistmono-regular">
                        CAT AND DOG BREED CLASSIFIER
                      </h1>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          WEB
                        </span>
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          EFFICIENTNET_B0
                        </span>
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          MACHINE LEARNING
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          PYTHON
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          FASTAPI
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/img/project4.jpeg"
                        alt="Project RASKITA"
                        className="w-[200px] rounded-lg"
                      />
                    </div>
                  </div>
                </a>

                <div className="h-[1px] w-auto bg-zinc-700 mt-10"></div>

                {/* Project 5 */}
                <a href="https://codesandbox.io/p/sandbox/modest-gould-lsry2h">
                  <div className="flex justify-between items-center p-10">
                    <div className="flex items-center gap-16">
                      <h1 className="text-zinc-500 font-geistmono-regular text-xl">
                        03
                      </h1>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        DIGIARCH
                      </h1>
                    </div>
                    <div className="w-[300px]">
                      <h1 className="text-white font-geistmono-regular">
                        MINI DIGIMON JS FETCH API PROJECT
                      </h1>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          WEB
                        </span>
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          FETCH API
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          HTML
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          CSS
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          JS
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/img/project5.jpeg"
                        alt="Project DIGIARCH"
                        className="w-[200px] rounded-lg"
                      />
                    </div>
                  </div>
                </a>

                <div className="h-[1px] w-auto bg-zinc-700 mt-10"></div>

                {/* Project 6 */}
                <a href="https://your-note-psi.vercel.app/">
                  <div className="flex justify-between items-center p-10">
                    <div className="flex items-center gap-16">
                      <h1 className="text-zinc-500 font-geistmono-regular text-xl">
                        04
                      </h1>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        YOURNOTE.
                      </h1>
                    </div>
                    <div className="w-[300px]">
                      <h1 className="text-white font-geistmono-regular">
                        Notes Project
                      </h1>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          WEB
                        </span>
                        <span className="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                          NEXT JS
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/img/project6.jpeg"
                        alt="Project YOURNOTE"
                        className="w-[200px] rounded-lg"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

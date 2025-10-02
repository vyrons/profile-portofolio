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
      cardRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
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
                  delay: i * 0.2,
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
        <div className="flex pl-10 pr-10 gap-[60%]">
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

        <div className="flex pl-10 pr-10 gap-3 items-center justify-center">
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

        <div className="flex pl-10 pr-10 mt-[150px] justify-center">
          <div
            className="bg-zinc-900 w-[1500px] rounded-lg h-auto"
            ref={(el) => (cardRef.current[4] = el)}
          >
            <div className="flex justify-center">
              <h1 className="text-white font-geistmono-light text-sm mt-5">
                More Project's
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="bg-zinc-800 w-[1180px] rounded-lg mt-5 h-[650px] mb-3">
                {/* Project 3 */}
                <div
                  className="flex mt-10 ml-5"
                  ref={(el) => (cardRef.current[5] = el)}
                >
                  <div className="flex gap-[200px]">
                    <div>
                      <h1 className="text-white font-geistmono-regular text-1xl">
                        01
                      </h1>
                    </div>

                    <div>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        YOURFIT
                      </h1>
                    </div>

                    <div className="flex justify-content">
                      <div class="w-[250px] p-4 rounded-lg">
                        <h1 className="text-white font-geistmono-regular">
                          ONLINE OUTFIT SHOP
                        </h1>
                        <div class="flex flex-wrap gap-2">
                          <span class="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            WEB
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            HTML
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            CSS
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            JS
                          </span>
                        </div>
                      </div>

                      <div className="ml-20">
                        <img
                          src="/img/project3.jpeg"
                          alt="project3"
                          className="w-[200px] rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-auto bg-zinc-700 mt-10"></div>

                {/* Project 4 */}
                <div
                  className="flex mt-10 ml-5"
                  ref={(el) => (cardRef.current[6] = el)}
                >
                  <div className="flex gap-[200px]">
                    <div>
                      <h1 className="text-white font-geistmono-regular text-1xl">
                        02
                      </h1>
                    </div>

                    <div>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        RASKITA
                      </h1>
                    </div>

                    <div className="flex justify-content">
                      <div class="w-[250px] p-4 rounded-lg">
                        <h1 className="text-white font-geistmono-regular">
                          CAT AND DOG BREED CLASSIFIER
                        </h1>
                        <div class="flex flex-wrap gap-2">
                          <span class="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            WEB
                          </span>
                          <span class="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            EFFICIENTNET_B0
                          </span>
                          <span class="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            MACHINE LEARNING
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            PYTHON
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            HTML
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            CSS
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            JS
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            SQLITE
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            FASTAPI
                          </span>
                        </div>
                      </div>

                      <div className="ml-20">
                        <img
                          src="/img/project4.jpeg"
                          alt="project3"
                          className="w-[200px] rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-auto bg-zinc-700 mt-10"></div>

                {/* Project 5 */}
                <div
                  className="flex mt-10 ml-5"
                  ref={(el) => (cardRef.current[7] = el)}
                >
                  <div className="flex gap-[200px]">
                    <div>
                      <h1 className="text-white font-geistmono-regular text-1xl">
                        03
                      </h1>
                    </div>

                    <div>
                      <h1 className="text-white font-geist-medium font-bold text-4xl">
                        DIGIARCH
                      </h1>
                    </div>

                    <div className="flex justify-content">
                      <div class="w-[250px] p-4 rounded-lg">
                        <h1 className="text-white font-geistmono-regular">
                          MINI DIGIMON JS FETCH API PROJECT
                        </h1>
                        <div class="flex flex-wrap gap-2">
                          <span class="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            WEB
                          </span>
                          <span class="bg-stone-100 text-black text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            FETCH API
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            HTML
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            CSS
                          </span>
                          <span class="bg-stone-600 text-white text-xs font-geistmono-light px-3 py-0.5 rounded-md">
                            JS
                          </span>
                        </div>
                      </div>

                      <div className="ml-20">
                        <img
                          src="/img/project5.jpeg"
                          alt="project3"
                          className="w-[200px] rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

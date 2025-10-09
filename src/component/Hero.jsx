import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.to(".marquee-text", {
        x: "-250%",
        duration: 10,
        ease: "linear",
        repeat: -1,
      });

      gsap.set(".mask-clip-path", {
        clipPath: "polygon(0% 10%, 100% 0%, 80% 20%, 50% 50%)",
      });

      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        y: 0,
        immediateRender: false,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen px-6"
      >
        {/* Bagian gambar */}
        <div
          className="relative flex justify-center items-start h-dvh w-screen z-50"
          id="clip"
        >
          <div className="mask-clip-path about-image hero-animate relative translate-y-[100px] z-50">
            <img
              src="/img/hero.webp"
              alt="Showcase"
              className="hero-animate w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Bagian teks, fixed supaya tidak bergerak */}
        <div className="absolute top-[57vh] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-10">
          <div className="hero-animate font-geistmono-regular flex items-center gap-24 text-sm uppercase tracking-widest text-gray-600 mb-3">
            <span>A</span>
            <span className="font-bold">Seriously</span>
            <span>Good</span>
          </div>

          <h1 className="hero-animate text-center font-geist-medium text-6xl md:text-8xl leading-tight">
            FRONTEND ENGINEER
          </h1>

          <div className="hero-animate flex items-center justify-between w-full max-w-10xl mt-5 text-gray-500 text-sm pr-10 pl-10">
            <span className="font-geistmono-regular mt-8 hidden md:block">
              ↓ Scroll for
            </span>

            <div className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-4 flex-1 max-w-md mx-auto mb-5">
              <div className="rounded-2xl size-12">
                <img
                  src="/img/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div>
                <p className="font-geist-regular">Ryan Rafidhea Reyhan</p>

                <div className="relative w-72 overflow-hidden">
                  <div className="marquee-text whitespace-nowrap font-geist-regular text-gray-400 text-sm">
                    <p>
                      Software Engineer Student, Rookie Frontend Engineer,
                      Newbie Design Engineer, React js Enthusiast &nbsp; •
                      &nbsp; Software Engineer Student, Rookie Frontend
                      Engineer, Newbie Design Engineer, React js Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <span className="font-geistmono-regular mt-8 hidden md:block">
              cool view ↓
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

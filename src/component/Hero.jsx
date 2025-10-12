import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });

      const marquee = document.querySelector(".marquee-text");
      const wrapper = cardRef.current; // sekarang ambil dari ref kontainer hitam

      if (marquee && wrapper) {
        const marqueeWidth = marquee.scrollWidth;
        const wrapperWidth = wrapper.offsetWidth;

        gsap.fromTo(
          marquee,
          { x: 0 },
          {
            x: `-${marqueeWidth - wrapperWidth}px`,
            duration: 12,
            ease: "linear",
            repeat: -1,
          }
        );
      }


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
        x: 0, // <--- penting untuk cegah geser horizontal
        left: 0, // <--- pastikan elemen nempel kiri
        top: 0,
        transform: "none", // <--- reset transform jika ada sisa translate
        immediateRender: false,
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: textRef.current,
        pinSpacing: false, // tidak menambah jarak ekstra
        anticipatePin: 1,
        invalidateOnRefresh: true,
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
              src="/img/hero3.webp"
              alt="Showcase"
              className="hero-animate size-full object-cover"
            />
          </div>
        </div>

        <div
          ref={textRef}
          className="absolute top-[57vh]  left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-10"
        >
          <div className="hero-animate font-geistmono-regular flex items-center gap-16 md:gap-24 text-sm uppercase tracking-widest text-gray-600 mb-3">
            <span>A</span>
            <span className="font-bold">Seriously</span>
            <span>Good</span>
          </div>

          <h1 className="hero-animate text-center font-geist-medium text-5xl md:text-6xl lg:text-8xl leading-tight">
            FRONTEND ENGINEER
          </h1>

          <div className="hero-animate flex items-center justify-between w-full max-w-10xl mt-5 text-gray-500 text-sm pr-10 pl-10">
            <span className="font-geistmono-regular mt-8 hidden md:block">
              ↓ Scroll for
            </span>

            <div
              ref={cardRef}
              className="bg-black text-white flex items-center gap-4 rounded-3xl px-4 py-3 
                max-w-[100%] sm:max-w-[500px] lg:max-w-[420px] h-15 mx-auto overflow-hidden"
            >
              <div className="rounded-2xl size-12 flex-shrink-0">
                <img
                  src="/img/profile.webp"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div>
                <p className="font-geist-regular">Ryan Rafidhea Reyhan</p>

                <div className="relative flex-grow overflow-hidden max-w-full">
                  <div className="marquee-wrapper relative w-full overflow-hidden">
                    <div className="marquee-text inline-block min-w-max whitespace-nowrap font-geist-regular text-gray-400 text-sm pr-[16px] md:pr-[32px]">
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

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Split untuk paragraf
    const split = new SplitType(descRef.current, { types: "words" });

    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    // Animasi ikon sosmed (stagger)
    gsap.fromTo(
      socialRef.current.children,
      { y: 40, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animasi gambar
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
        },
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section id="about" className="relative z-20 bg-[#f3f3f3] py-20 px-6">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20 max-w-6xl mx-auto">
        <div className="mt-10 md:mt-[200px] text-center md:text-left">
          <h1 className="font-geistmono-light text-[18px] md:text-[20px] mb-4">
            About Me
          </h1>

          <div
            ref={socialRef}
            className="flex flex-row gap-5 justify-center md:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/ryan-rafidhea-reyhan-439109211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[40px] transition-colors duration-300 hover:text-stone-500" />
            </a>
            <a
              href="https://github.com/vyrons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[40px] transition-colors duration-300 hover:text-stone-500" />
            </a>
            <a
              href="https://www.instagram.com/novel.jsx?igsh=MW1zNWI1cmR0Y3ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[40px] transition-colors duration-300 hover:text-stone-500" />
            </a>
          </div>

          <p
            ref={descRef}
            className="font-geist-medium font-bold mt-5 text-[16px] sm:text-[18px] md:text-3xl leading-relaxed md:leading-[1.6]"
          >
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

        <div
          ref={imageRef}
          className="rounded-2xl w-[250px] h-[180px] sm:w-[300px] sm:h-[200px] md:w-[350px] md:h-[250px] mt-10 md:mt-[200px]"
        >
          <img
            src="/img/about.webp"
            alt="about"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const [isIndicatorActive, setisIndicatorActive] = useState(false);

  const navRef = useRef(null);
  const audioElementRef = useRef(null);

  const [lastScrollY, setlastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
      navRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
      navRef.current.classList.add("floating-nav");
    }

    setlastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setisAudioPlaying((prev) => !prev);
    setisIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero-animate ", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.28,
        ease: "power3.out",
      });
    }, navRef);

    const st = ScrollTrigger.create({
      trigger: "#footer",
      start: "top -50%",
      onEnter: () => {
        gsap.to(".flex.gap-8 .hero-animate span", {
          color: "#ffffff",
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(".indicator-line", {
          backgroundColor: "#ffffff",
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(".flex.gap-8 .hero-animate span", {
          color: (i, target) =>
            target.classList.contains("text-gray-500") ? "#6b7280" : "#000000",
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(".indicator-line", {
          backgroundColor: "#000000",
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
    });

    return () => {
      ctx.revert();
      st.kill();
    };
  }, []);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <nav
      ref={navRef}
      className="fixed flex justify-between items-center w-full px-8 py-4 text-sm font-medium z-[60]"
    >
      <div className="flex gap-8">
        <div className="hero-animate flex flex-col font-geist-regular">
          <span>Indo Based</span>
          <span className="text-gray-500">Web Dev Student</span>
        </div>
        <div className="hero-animate flex flex-col font-geist-regular">
          <span>Building at</span>
          <span className="text-gray-500">Frontend</span>
        </div>
        <div className="hero-animate flex flex-col font-geist-regular">
          <span>Internship availability</span>
          <span className="text-gray-500">February 2025</span>
        </div>
      </div>

      <div className="flex gap-5">
        <Button
          id="product-button"
          title="Get Touch"
          rightIcon={<TiLocationArrow />}
          containerClass="hero-animate font-geist-regular bg-black text-white md:flex hidden items-center justify-center gap-1"
        />

        <button
          className="audio flex items-center space-x-0.5"
          onClick={toggleAudioIndicator}
        >
          <audio
            src="/audio/audio.mp3"
            className="hidden"
            ref={audioElementRef}
            loop
          />
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
              style={{ animationDelay: `${bar * 0.1}s` }}
            />
          ))}
          {/* </audio> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

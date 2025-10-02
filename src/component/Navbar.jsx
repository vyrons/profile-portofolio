import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

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

      <Button
        id="product-button"
        title="Get Touch"
        rightIcon={<TiLocationArrow />}
        containerClass="hero-animate font-geist-regular bg-black text-white md:flex hidden items-center justify-center gap-1"
      />
    </nav>
  );
};

export default Navbar;

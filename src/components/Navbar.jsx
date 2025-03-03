import React, { useState, useEffect } from "react";
import Home_Logo from "../assets/projects/logo1.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavBox, setShowNavBox] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowNavBox(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isMenuOpen) {
          setShowNavBox(!entry.isIntersecting);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex items-center justify-between py-6" id="home">
        <div className="flex flex-shrink-0 items-center ">
          <a href="/" aria-label="Home">
            <img
              src={Home_Logo}
              alt="Home Logo"
              className="mx-2 "
              width={100}
              height={43}
            />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/rabin-poudel-770842277"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-blue-400 " />
          </a>
          <a
            href="https://www.github.com/rabin20-04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/PoudelRabin5824?s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-blue-400" />
          </a>
          <button
            onClick={toggleMenu}
            className="text-foreground hover:text-gray-600 transition-colors"
            aria-label="Toggle Menu"
          ></button>
        </div>
      </nav>

      <div
        className={`fixed left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-50 
          bg-black/40 backdrop-blur-md 
          rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.3)] px-6 py-4 mx-[-8px]
          ${
            showNavBox || isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("address")}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Address
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

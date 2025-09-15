<<<<<<< HEAD



import React from "react";
=======
import React, { useState } from "react";
import { FaBriefcase, FaBars, FaTimes } from "react-icons/fa";
>>>>>>> d35f730 (Fixed mobile menu alignment and styling)
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔑 Smooth scroll handler
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className="header">
      {/* Left: Logo + Name */}
      <div className="logo">
        <FaBriefcase className="icon" />
        <h1 className="name">ATYAN MALIK</h1>
      </div>

      {/* Desktop Nav */}
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Desktop Button */}
      <button className="contact-btn" onClick={scrollToContact}>
        Contact Me
      </button>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>

        <button className="contact-btn" onClick={scrollToContact}>
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;

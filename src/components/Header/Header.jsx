import React, { useState } from "react";
import "./Header.css";
import { BsBriefcase } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger + close icons

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className="h-wrapper">
      <h1>
        <BsBriefcase style={{ color: "white", fontSize: "30px" }} /> ATYAN
        MALIK.
      </h1>

      <div className={`h-menu ${open ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      <div>
        <a className="btn00" href="#contact">
          Contact Now
        </a>
      </div>

      <button className="menu-btn" onClick={handleToggle}>
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>
    </div>
  );
};

export default Header;

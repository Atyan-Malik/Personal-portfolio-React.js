


import React from "react";
import "./Header.css";
import { BsBriefcase } from "react-icons/bs";

const Header = () => {
  // scroll to contact section
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-wrapper">
      <h1>
        <BsBriefcase style={{ color: "white", fontSize: "30px" }} /> ATYAN MALIK.
      </h1>

      <div className="h-right">
        <button className="btn00" onClick={scrollToContact}>
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Header;


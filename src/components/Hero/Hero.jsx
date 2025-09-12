import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="hero">
     
      <div className="hero-left" data-aos="fade-left">
        
          <h5>Hi, I'm <span className="highlight">Atyan</span> </h5>
        
        <p>
          I’m a passionate Frontend Developer <br /> who loves building clean, <br />
          responsive,  and interactive web interfaces. Using  <br /> HTML CSS /TAILWIND JAVASCRIPT REACT.js!

        </p>
        <button onClick={()=>window.open("https://github.com/Atyan-Malik")} className="hero-btn">See My Projects</button>
      </div>

     
      <div className="hero-right" data-aos="fade-right">
        <img src="/img2.png" alt="Atyan Portrait" />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {

    useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true,     // animation happens only once while scrolling
    });
  }, []);

  // const  handleClick=()=>{
  // <a href="https://github.com/Atyan-Malik"></a>
  // }
  return (
    <>
    <div className="hero-wrapper">
      {/* hero left   */}
      <div data-aos="fade-right" className="leftside">
       <div className="heading"> <strong>Hi</strong> there, i m ATYAN !</div>
        <h3>
          Front‑end developer <br />crafting fast, <br />
          accessible React <strong>UIs.</strong> 
        </h3>
        <p>
          I build responsive interfaces with <br /><strong>HTML CSS/Tailwind, JavaScript, and React.</strong>
          <br /> focused on performance and DX.
        </p>

    <div className="hero-btns">
      

      
   
      <button onClick={()=>window.open("https://github.com/Atyan-Malik")} className="btn5">See My Projects</button>
    
     


       
    </div>

      </div>

      {/* hero right */}
      <div data-aos="fade-left" className="rightside">
        <img src="./img2.png" alt="" />
      </div>

      
    </div>

   
    </>
  );
};

export default Hero;

import React from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    Name: "Cosmetic Website",
    Tech: "HTML,TAILWIND,JAVASCRIPT",
    image: "/cosmetic.jpg",
    Link:"https://github.com/Atyan-Malik/Cosmetic-Website"
  },
  {
    Name: "Real Estate",
    Tech: "REACT.js Website",
    image: "/r-s.jpg",
    link: "https://github.com/Atyan-Malik/Real-Estate-React.js-Website",
  },
  {
    Name: "Weather App",
    Tech: "HTML,CSS,JAVASCRIPT",

    image: "/Weather.jpg",
    link: "https://github.com/Atyan-Malik/Weather-app",
  },
  {
    Name: "Tic Tac Toe",
    Tech: "HTML,CSS,JAVASCRIPT",

    image: "/tic.jpg",
    link: "https://github.com/Atyan-Malik/game",
  },
  {
    Name: "Dashboard",
    Tech: "REACT.js",
    image: "/dashboard.jpg",
    link: "https://github.com/Atyan-Malik/React.js-Dashboard",
  },
  {
    Name: "Restaurant",
    Tech: "HTML,CSS,JAVASCRIPT",

    image: "/restaurant.jpg",
    link: "https://github.com/Atyan-Malik/restaurant-website",
  },
];

const Projects = () => {

  
      useEffect(() => {
      AOS.init({
        duration: 2000, // animation duration in ms
        once: true,     // animation happens only once while scrolling
      });
    }, []);


  return (
    <>

      <div data-aos="fade-up" className="p-wrapper">
        <h2 className="p-p-2">Projects</h2>
        <div className="p-container">
          {projects.map((i, index) => (
            <div className="pro-grid" key={index}>
              <h2 className="p-n">{i.Name}</h2>
              <p className="p-p">{i.Tech}</p>
              <img src={i.image} alt="" />
              {/* <button className="btn3">
               <a href={i.link}></a>
                SEE PROJECT
              </button> */}
               <a 
              href={i.link} 
              target="_blank" 
              rel="noopener noreferrer"
              
            >
             <button className="btn3">See Project</button>
            </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

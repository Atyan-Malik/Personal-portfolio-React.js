
import "./About.css";
import Skills from "../../components/About/Skills";
// import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { FiChevronDown } from "react-icons/fi"; 
import data from "../../AccordionData";
import  "../../Accordion.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {


    useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    });
  }, []);
  
  return (
    <div className="a-wrapper">
    
      {/* left side */}
      <div data-aos="fade-up" className="aboutleft">
      <h2 className="a-h">About Me</h2>

          <Accordion.Root type="single" collapsible className="accordion-root">
      {data.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="accordion-item">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              {item.heading} 
               <FiChevronDown className="accordion-icon" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            {item.details}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
      </div>


      {/* right side */}

      { <div data-aos="fade-up" className="aboutright">
        
        <Skills/>
      
      </div>}

      
    </div>
  );
};

export default About;

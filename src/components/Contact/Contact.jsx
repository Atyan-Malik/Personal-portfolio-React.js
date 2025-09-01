import React from "react";
import "./Contact.css";
import Form from "./Form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsVoicemail,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once while scrolling
    });
  }, []);

  // const handleClick=()=>{
  //   window.location.href="{i.Link1}"
  // }
  return (
    <div data-aos="fade-up" className="c-wrapper">
      <div className="c-right">
        <Form />
      </div>

      <div className="c-left">
        <div className="c-grid">

            <div  onClick={() => (window.location.href =  "https://mail.google.com/mail/?view=cm&fs=1&to=atyanmalik8@gmail.com&su=Hello&body=I%20want%20to%20connect%20with%20you")} className="card icon"><MdEmail /><p>Email Now</p></div>
            <div onClick={()=>window.open("https://www.instagram.com/atyan._.developer/")} className="card icon "><BsInstagram /><p>Instagram</p></div>
            <div onClick={()=>window.open("https://wa.me/923193844891", "_blank")} className="card icon"><BsWhatsapp /><p>WhatsApp</p></div>
            <div onClick={()=>window.open("https://www.facebook.com/share/1776wxHUzd/")} className="card icon"><BsFacebook /><p>Facebook</p></div>
        
             
            </div>
          
        </div>
      </div>
    
  );
};

export default Contact;

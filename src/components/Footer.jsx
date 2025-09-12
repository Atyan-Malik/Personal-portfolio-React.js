import React from "react";
import "./Footer.css";
import { BiSad, BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="f-wrapper">
        <div className="left">
          <h1> Atyan malik's Portfolio .</h1> <br />
          <div className="f-s">
            <p>{<BiSolidPhoneCall />}</p> <span>03193844891</span>
            <p>{<MdEmail />}</p> <span>atyanmalik8@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <i
              onClick={() => window.open("https://github.com/Atyan-Malik")}
              className="fa-brands fa-github"
            ></i>
            <i
              onClick={() =>
                window.open("https://www.instagram.com/atyan._.developer/")
              }
              className="fa-brands fa-instagram"
            ></i>
            <i
              onClick={() =>
                window.open("https://www.facebook.com/share/1776wxHUzd/")
              }
              className="fa-brands fa-facebook"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Dev
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100073660681955 ">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/dev.ops_/">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <GrTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Dev,All rights are reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

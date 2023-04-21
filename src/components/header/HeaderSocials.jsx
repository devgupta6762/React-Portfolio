import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dev-ji-gupta/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/devgupta6762" target="blank">
        <FaGithub />
      </a>
      <a href="https://discord.com/channels/devgupta6762" target="blank">
        <SiDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;

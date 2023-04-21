import React from "react";
import "./experience.css";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { IoLogoAngular } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiAmazonaws } from "react-icons/si";
import { SiExpressvpn } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { SiDocker } from "react-icons/si";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <div>
                <h4>React.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon " />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon " />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiHtml5 className="experience__details-icon " />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoAngular className="experience__details-icon" />
              <div>
                <h4>Angular.Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon " />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpressvpn className="experience__details-icon " />
              <div>
                <h4>Express.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiAmazonaws className="experience__details-icon " />
              <div>
                {" "}
                <h4>AWS Lambda</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNginx className="experience__details-icon " />
              <div>
                <h4>Nginx</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDocker className="experience__details-icon " />
              <div>
                {" "}
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

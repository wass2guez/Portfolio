import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../../img/github.png";
import Linkedin from "../../../img/linkedin.png";
import Instagram from "../../../img/instagram.png";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import wass from "../../../img/wass.png";
import thumbup from "../../../img/thumbup.png";
import Crown from "../../../img/crown.png";
import glassesimoji from "../../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I'am</span>
          <span>Wassim Guezguez</span>
          <span>
            Software Engineer, recently graduated . I'am a Full-stack Developer
            with just few months of experience in such languages and librarires
            such as{" "}
          </span>{" "}
          <span>ReactJs , NodeJs , AngularJs...</span>
          <button className="button i-button">Hire me!</button>
          <div className="i-icons">
            <a href="https://github.com/wass2guez">
              <img src={Github} />
            </a>
            <a href="https://www.linkedin.com/in/wassim-guezguez-5822751b7/">
              <img src={Linkedin} />
            </a>
            <a href="https://www.instagram.com/wass2guez/">
              <img src={Instagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img src={wass} />
        <motion.img
          animate={{
            x: 100,
            y: 0,
            scale: 0.6,
            rotate: 0,
          }}
          transition={{ duration: 2 }}
          src={glassesimoji}
        />

        <motion.div
          animate={{
            x: -100,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 2 }}
          style={{ top: "-4%", left: "70%" }}
          className='floating-div'
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          animate={{
            x: -100,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 2 }}
          style={{ top: "19rem", left: "-0.5rem" }}
          className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

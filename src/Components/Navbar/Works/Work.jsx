import React, { useContext } from "react";
import "./Work.css";
import Upwork from '../../../img/Upwork.png'
import Fiver from '../../../img/fiverr.png'
import Amazon from '../../../img/amazon.png'
import Shopify from '../../../img/Shopify.png'
import Facebook from '../../../img/Facebook.png'
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";




const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{color : darkMode? 'white' : ''}}>Works for All these</span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          voluptas saepe <br/> dolorum in soluta earum nobis facilis ut reiciendis
          quasi? <br /> Culpa eum voluptas deleniti in! Possimus veritatis modi
          aut unde! <nr/>
          gazgouz wassim
        </spane>
        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="w-right">
        <motion.div 
        whileHover= {{rotate : 360 , dur : 2}}
        transition = {{duration : 2}}
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} />
                 </div>
                 <div className="w-secCircle">
                <img src={Fiver} />
                 </div>
                 <div className="w-secCircle">
                <img src={Amazon} />
                 </div>
                 <div className="w-secCircle">
                <img src={Shopify} />
                 </div>
                 <div className="w-secCircle">
                <img src={Facebook} />
                 </div>
        </motion.div>
        {/* BACKGROUND circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  );
};

export default Work;

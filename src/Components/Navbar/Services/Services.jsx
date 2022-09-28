import React, { useContext } from 'react'

import './Services.css'
import HeartEmoji from '../../../img/heartemoji.png'
import Glasses from '../../../img/glasses.png'
import Humble from '../../../img/humble.png'
import Card from './../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../../../Context'
import { motion } from "framer-motion";

const Services = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color : darkMode? 'white' : ''}}>My Awesome</span>
            <span>Services</span>
            <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas saepe dolorum in soluta earum nobis facilis ut reiciendis quasi? <br/> Culpa eum voluptas deleniti in! Possimus veritatis modi aut unde!</spane>
           <a href={Resume} download>
            <motion.button whileHover={{scale : 1.2}} className='button s-button'>Download CV</motion.button>
            </a> 
            <div className='blur s-blur1' style={{ background : '#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <motion.div 
         animate={{  x: 100,
            y: 0, opacity: 1, scale: 1 }}
         transition={{
             duration: 5,
             delay: 0.3,
             ease: [0.5, 0.71, 1, 1.5],
         }}
         initial={{ opacity: 0, scale: 0.5 }}
         whileHover={{ scale: 1.1 ,  x: [50, 150, 100] }}
        className="cards">
            <div style={{left : '14rem'}}>
                <Card  
                emoji={HeartEmoji}
                heading={'Design'}
                detail = {"Html , Css , JavaScript , ..."} />
            </div>
            <div style={{top : '12rem' , left:'-4rem'}}>
                <Card  
                emoji={Glasses}
                heading={'Developer'}
                detail = {"Html , Css , JavaScript , ..."} />
            </div>
            <div style={{top : '19rem' , left:'11.5rem'}}>
                <Card  
                emoji={Humble}
                heading={'UI/UX'}
                detail = {"Html , Css , JavaScript , ..."} />
            </div>
            <div className="blur s-blur2" style={{background : 'var(--purple)'}}></div>
        </motion.div>
    </div>
  )
}

export default Services
import { motion } from "framer-motion";

import { styles } from "../styles";
import "./hero.css"

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_container container">
        <div className="hero_content grid">
        
     
        <div className="icon_container">
          <a href='https://www.instagram.com/danieloemenike' className="icon" target="_blank">
            <i className= "uil uil-instagram"></i>

          </a>

          <a href='https://dribbble.com/' className="icon" target="_blank">
              
            <i className = "uil uil-dribbble" > </i>

          </a>

          <a href='https://github.com/danieloemenike' className="icon" target="_blank">
            <i className= "uil uil-github-alt"> </i>
          </a>
          
          </div>
  
        <div className="home_img "></div>
       

        <div className= "herotext_container">      
              <h1 className="hero_text">
            Hi, I'm <span className='text-[#ffffff]'> Daniel </span>
            </h1>
            <h2 className="subtitle #0ce7dc">
            <span className='text-[#3ce2f8]'> - Software Developer </span>
            </h2>
            <div className="innerText">
          <p className= "hero_subtext" >
             I build Outstanding user interfaces that makes  <br  /> a statement and that's  what sets me apart. <br/>  My mediums are as bold as my message. {/**<br/> Loud, proud, no limits allowed  */} 
          </p>
          </div>
          </div>

       
          
  
          </div>
        
    



      <div className='scrollbox'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
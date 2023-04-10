import React from "react";


import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className='flex justify-center items-center w-full h-full' > 
      <h3 className='text-white text-[44px] font-bold mb-12'>Tech Stack </h3>
    </div>
      
    <div className='flex flex-row flex-wrap justify-center gap-10   '>
      
      {technologies.map((technology) => (
        <div className='w-28 h-29 rounded-full bg-white bg-opacity-10 backdrop-blur-3xl drop-shadow-2xl p-5 shadow-card ring-1 ring-gray-900/5 ' key={ technology.name }>
          <div >
            
            <img className=" rounded-full"  src={technology.icon} alt="tech stack" />
          </div>
       
        </div>
      ))}
      </div>
      </>
  );
};

export default SectionWrapper(Tech, "");

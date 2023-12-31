import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";


export const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder. . .", "Full Stack Developer. . .", "UI Designer. . ."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
    <div className='flex flex-col gap-5'>
      <h4 className='text-lg font-normal '>Welcome to my Website</h4>
      <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "}
         <span className='text-designColor captialize'>Ayush</span>
      </h1>
      <h2 className='text-4xl text-white font-bold'> a <span>{text}</span>
      <Cursor
        cursorBlinking="false"
        cursorStyle="|"
        cursorColor="#ff014f"
      /></h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">
      Lorem ipsum dolor sit amet, consectetur adip Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde placeat earum itaque, nostrum, vel reiciendis, totam facere iste iusto impedit necessitatibus nesciunt fuga obcaecati nam ratione tenetur aliquid temporibus.
     </p>
    </div>
     <div className='flex justify-between'>
    <div>
       <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
         <span className="bannerIcon">
          <FaFacebookF />
         </span>
         <span className="bannerIcon">
          <FaTwitter />
         </span>
         <span className="bannerIcon">
          <FaLinkedinIn />
         </span>
      </div>
    </div>
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        BEST SKILL ON
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <FaReact />
        </span>
        <span className="bannerIcon">
          <SiNextdotjs />
        </span>
        <span className="bannerIcon">
          <SiTailwindcss />
        </span>
        <span className="bannerIcon">
          <SiFigma />
        </span>
      </div>
    </div>
    </div>
    </div>
  )
}

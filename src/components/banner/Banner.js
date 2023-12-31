import React from 'react'
import { LeftBanner } from './LeftBanner'
import { RightBanner } from './RightBanner'

export const Banner = () => {
  
  return (
    <section
      id="home"
      className="w-full  p-20 flex  items-center border-b-[1px] font-titleFont border-b-black">
        {/* <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal '>Welcome to my Website</h4>
          <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "}
             <span className='text-designColor captialize'> ElonMusk</span>
          </h1>
          <h2 className='text-4xl text-white font-bold'> a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          /></h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
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
        </div> */}
        <RightBanner/>
        <LeftBanner/>

        </section>
  )
}

import React from 'react'
import {bannerImg} from './../../assets/index';
export const RightBanner = () => {
  return (
    <div className='w-1/2  flex justify-end items-center'>
       <img src={bannerImg} alt="bannerImg" className='w-full h-[550px] z-10 mb-5 ' />
    </div>
  )
}

import React from 'react';
import signups_icon from "../../assets/images/signups.png";

const Dash = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6'>
      <div className='bg-[#161716]  rounded-[8px] p-[28px] flex items-center gap-4 hover:rotate-6 duration-600'>
        <img src={signups_icon} alt="" />
        <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-[30px]'>2589</span>
            <span className='text-[#FFFFFFCC] text-[14px] font-medium'>Total Signups</span>
        </div>
      </div>
      <div className='bg-[#161716] rounded-[8px] p-[28px] flex items-center gap-4 hover:rotate-6 duration-600'>
        <img src={signups_icon} alt="" />
        <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-[30px]'>60%</span>
            <span className='text-[#FFFFFFCC] text-[14px] font-medium'>Conversion Rate</span>
        </div>
      </div>
      <div className='bg-[#161716] rounded-[8px] p-[28px] flex items-center gap-4 hover:rotate-6 duration-600'>
        <img src={signups_icon} alt="" />
        <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-[30px]'>20 Days</span>
            <span className='text-[#FFFFFFCC] text-[14px] font-medium'>Launch Date Countdown</span>
        </div>
      </div>
      <div className='bg-[#161716] rounded-[8px] p-[28px] flex items-center gap-4 hover:rotate-6 duration-600'>
        <img src={signups_icon} alt="" />
        <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-[30px]'>###</span>
            <span className='text-[#FFFFFFCC] text-[14px] font-medium'>Total ####</span>
        </div>
      </div>
    </div>
  )
}

export default Dash

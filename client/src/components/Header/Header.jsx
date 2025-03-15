import React from 'react';
import WaitlyLogo from '../WaitlyLogo/WaitlyLogo';

const Header = () => {
  return (
    <div className='py-6 pt-15'>
      <div className='flex items-center justify-between max-w-[1440px] mx-auto text-white'>
        <div className='flex items-center space-x-20'>
            <WaitlyLogo />
            <ul className='flex items-center space-x-6'>
                <li>Home</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Features</li>
            </ul>
        </div>
        <div className='flex items-center space-x-6'>
            <button className='bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] h-[58px] w-[180px] rounded-[5px]'>Create Now</button>
            <button className='h-[58px] w-[180px] border-2 border-[#7367F0] rounded-[5px]'>Get A Quote</button>
        </div>

      </div>
    </div>
  )
}

export default Header

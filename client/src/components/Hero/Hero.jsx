import React from "react";
import why_waitly from "../../assets/icons/why-us.png";
import vector1 from '../../assets/images/vector1.png';
import vector2 from '../../assets/images/vector2.png';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center md:mt-[4rem]">
        <img src={vector1} alt="vector1" className="absolute hidden md:block top-[30%] left-[20rem]" />
        <img src={vector2} alt="vector2" className="absolute hidden md:block top-[100%] right-[50%]" />
      <div className="text-white mx-auto max-w-[1440px] py-20 px-4 md:px-6 text-center space-y-10">
        <h1
          id="hero-headline"
          className="text-center leading-[3rem] md:leading-[6rem] text-[2.5rem] md:text-[6rem] font-extrabold"
        >
          Seamless Waitlist Management{" "}
          <span className="text-gray-400">for Your Launch!</span>
        </h1>
        <p className="text-[14px] md:text-[18px]">
          Collect, manage, and engage your waitlist in one place. <br className="hidden md:block" />
          Get a personalized dashboard, automated emails, <br className="hidden md:block" />
          and seamless exports—all without the hassle
        </p>
        <div className="flex items-center justify-center space-x-6">
          <button className="bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] h-[58px] w-[150px] md:w-[180px] rounded-[5px]">
            Get Started
          </button>
          <button className=" h-[58px] w-[150px] md:w-[180px] flex items-center bg-transparent space-x-3">
            <img src={why_waitly} alt="why-waitly" />
            <span className="cabinet">Why Waitly</span>
          </button>
        </div>
        <div className="mt-20">
            <ul className="flex items-center md:justify-center w-full justify-around md:space-x-20 mx-auto">
                <li className="flex items-center flex-col">
                    <span className="cabinet-extrabold text-[32px] font-extrabold">0M+</span>
                    <span className="text-[18px]">Users</span>
                </li>
                <li className="flex items-center flex-col">
                    <span className="cabinet-extrabold text-[32px] font-extrabold">0M+</span>
                    <span className="text-[18px[">Waitlists</span>
                </li>
                <li className="flex items-center flex-col">
                    <span className="cabinet-extrabold text-[32px] font-extrabold">0M+</span>
                    <span className="text-[18px]">Partners</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import WaitlyLogo from "../../WaitlyLogo/WaitlyLogo";
import { MdOutlineNotificationsActive } from "react-icons/md";
import user_logo from "../../../assets/images/logo.webp";
import { GrMoreVertical } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-gray-400 py-6 w-full">
      <div className="flex items-center justify-between px-6 w-full">
        <Link to={"/"} className="logo md:w-[20%]">
          <WaitlyLogo />
        </Link>

        <ul className="flex items-center gap-4 w-[70%] justify-between">
          <li>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-[1rem] h-[1rem] absolute z-50 bg-[#CE9FFC] rounded-full text-white flex items-center justify-center text-[10px] right-[-.1rem] top-[-.6rem] p-2">
                    <span>2</span>
                </div>
                <MdOutlineNotificationsActive className="text-3xl" />
              </div>
              <div className="bg-transparent w-auto md:w-[20rem] xl:w-[40rem] py-2 px-4 flex gap-2 text-[14px] items-center h-[48px] rounded-[8px] border border-[#1F1F1F]">
                {" "}
                <IoSearchOutline className="text-xl" />
                <input
                  className="w-full bg-transparent border-none outline-none h-full "
                  placeholder="Search..."
                  type="search"
                  name=""
                  id=""
                />
              </div>
            </div>
          </li>

          <li className="flex items-center gap-3 bg-[#161716] py-2 px-4 rounded-[8px]">
            <img
              src={user_logo}
              alt="avatar"
              className="w-[2rem] h-[2rem] rounded-full"
            />
            <span>starlighthub</span>
            <GrMoreVertical />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

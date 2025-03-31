import React from "react";
import WaitlyLogo from "../../WaitlyLogo/WaitlyLogo";
import { MdOutlineNotificationsActive } from "react-icons/md";
import avatar from "../../../assets/images/avatar.png";
import { GrMoreVertical } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="text-gray-400 py-6 w-full">
      <div className="flex items-center justify-between px-6 w-full">
        <div className="logo w-[20%]">
          <WaitlyLogo />
        </div>

        <ul className="flex items-center w-[70%] justify-between">
          <li>
            <div className="flex items-center gap-4">
              <MdOutlineNotificationsActive className="text-3xl" />
              <div className="bg-transparent w-[20rem] py-2 px-4 flex gap-2 text-[14px] items-center h-[48px] rounded-[8px] border border-[#1F1F1F]">
                {" "}
                <IoSearchOutline className="text-xl" />
                <input
                  className="w-full bg-transparent border-none outline-none h-full "
                  placeholder="Search through your waitlist"
                  type="search"
                  name=""
                  id=""
                />
              </div>
            </div>
          </li>

          <li className="flex items-center gap-3 bg-[#161716] py-2 px-4 rounded-[8px]">
            <img src={avatar} alt="avatar" />
            <span>skillspothub</span>
            <GrMoreVertical />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { MdOutlineDashboard, MdFormatListNumberedRtl } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { LiaMailBulkSolid } from "react-icons/lia";
import { VscReport, VscRobot } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <MdOutlineDashboard className="text-xl" /> },
    { to: "/dashboard/waitlists", label: "Waitlists", icon: <MdFormatListNumberedRtl className="text-xl" /> },
    { to: "/dashboard/customers", label: "Customers", icon: <AiOutlineCustomerService className="text-xl" /> },
    { to: "/dashboard/bulk-messaging", label: "Bulk Messaging", icon: <LiaMailBulkSolid className="text-xl" /> },
    { to: "/dashboard/reports-and-insights", label: "Reports & Insights", icon: <VscReport className="text-xl" /> },
    { to: "/dashboard/settings", label: "Settings", icon: <IoSettingsOutline className="text-xl" /> },
  ];

  return (
    <div className="w-[290px] min-h-[674px] py-6 bg-[#161716] text-[14px] border border-[#1F1F1F] text-[#FCFCFC] h-full flex flex-col justify-between items-start duration-500 cursor-pointer">
      <ul className="space-y-2 w-full">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-2 px-6 w-full h-[40px] ${
              location.pathname === item.to ? "bg-[#2D2E2D]" : "hover:bg-[#2D2E2D]"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-2 hover:bg-[#2D2E2D] px-6 w-full h-[40px]">
        <VscRobot className="text-xl" />
        <span>AI Assist</span>
      </div>
    </div>
  );
};

export default SideBar;
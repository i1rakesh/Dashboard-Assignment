import React from "react";
import logo from "../assests/logo.png";
import grid from "../assests/icons8-grid-30.png";
import profit from "../assests/icons8-profit-30.png";
import setting from "../assests/icons8-settings.gif";
const Sidebar = () => {

  return (
    <div className="bg-white p-4 h-100 w-full lg:w-[20%] shadow-gray-400 shadow-md rounded-3xl border border-gray-200">
      <div className="mt-4 flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="mt-[4rem] text-[18px] font-bold text-center">
        <ul className="text-center w-full gap-4 justify-center lg:ml-[2rem]">
          <li className="flex gap-2 p-4 w-full md:w-[12rem] hover:bg-blue-400/50 hover:rounded-3xl hover:text-blue-800"><img src={grid} alt="" />Report</li>
          <li className="flex gap-2 p-4 w-full md:w-[12rem] hover:bg-blue-400/50 hover:rounded-3xl hover:text-blue-800"><img src={profit} alt="" />Workspace</li>
          <li className="flex gap-2 p-4 w-full md:w-[12rem] hover:bg-blue-400/50 hover:rounded-3xl hover:text-blue-800"><img src={setting} alt="" />Setting</li>
        </ul>
      </div>
      </div>
  );
};

export default Sidebar;

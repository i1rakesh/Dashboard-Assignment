import React from "react";
import search from "../assests/search.png"
import Home from "../assests/home.png"
import fire from "../assests/Vector.png"
import Person from "../assests/Vector-1.png"
import save from "../assests/Vector-2.png"
import Paper from "../assests/Vector-3.png"
import question from "../assests/Vector-4.png"
import setting from "../assests/Vector-5.png"
import logout from "../assests/Vector-6.png"
const Sidebar = () => {

  return (
    <div className="bg-[#F6F6FB] p-4 min-h-[100vh] w-fit  shadow-gray-400 shadow-md rounded-3xl border border-gray-200">
      <div className="mt-4 flex gap-4 justify-center">
        <img src={search} className=" shadow-sky-500 shadow-xl w-12 h-12 p-2 rounded-full bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 to-90%" alt="" />
        <h1 className="text-[24px] self-center font-bold">Concured</h1>
      </div>
      <div className="mt-4 flex justify-center ">
        
      </div>
      <div className="mt-[4rem] text-[18px] font-bold text-center overflow-hidden">
        <ul className="text-center w-full gap-4 justify-center ">
          <li className="flex gap-4 p-4 w-[90%] hover:bg-fuchsia-200 hover:text-fuchsia-800 rounded-2xl"><img src={Home} alt="" className="w-6 h-6" /><h1>Overview</h1></li>
          <li className="flex gap-4 p-4 w-[90%]  hover:bg-fuchsia-200 hover:text-fuchsia-800 rounded-2xl"><img src={fire} alt="" className="w-6 h-6" /><h1>Oppertunities</h1></li>
          <li className="flex gap-4 p-4 text-[14px] hover:bg-fuchsia-200 hover:text-fuchsia-800 rounded-2xl"><img src={Person} alt="" className="w-6 h-6" /><h1>My Competitors</h1></li>
          <li className="flex gap-4 p-4 w-[90%] hover:bg-fuchsia-200 hover:text-fuchsia-800 rounded-2xl"><img src={Paper} alt="" className="w-6 h-6" /><h1>Brief</h1></li>
          <li className="flex gap-4 p-4 w-[90%] hover:bg-fuchsia-200 hover:text-fuchsia-800 rounded-2xl"><img src={save} alt="" className="w-6 h-6" /><h1>Saved</h1></li> 
        </ul>
      </div>
      <div className="mt-[15vh] text-[18px] font-bold text-center overflow-hidden">
        <ul className="text-center w-full gap-4 justify-center">
          <li className="flex gap-4 p-4 w-[90%] hover:bg-sky-200 hover:text-sky-800 rounded-2xl"><img src={setting} alt="" className="w-6 h-6" /><h1>Setting</h1></li>
          <li className="flex gap-4 p-4 w-[90%]  hover:bg-sky-200 hover:text-sky-800 rounded-2xl"><img src={question} alt="" className="w-6 h-6" /><h1>Help</h1></li>
          <li className="flex gap-4 p-4 w-[90%]  hover:bg-sky-200 hover:text-sky-800 rounded-2xl"><img src={logout} alt="" className="w-6 h-6" /><h1>Log out</h1></li>
        </ul>
      </div>
      </div>
  );
};

export default Sidebar;

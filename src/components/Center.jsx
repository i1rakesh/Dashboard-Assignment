import React from "react";
import Sidebar from "./Sidebar";
import char from "../assests/Vector-7.png";
import add from "../assests/Vector-8.png";
import down from "../assests/Polygon 2.png";
import img from "../assests/images 1.png";
import time from "../assests/Vector-9.png";
import person from "../assests/Vector-10.png";
import calender from "../assests/Vector-11.png";
import stat from "../assests/Vector-12.png";
import question from "../assests/Group 13.png"
import green from "../assests/green.png"
import red from "../assests/red.png"
import Graph from "./Graph";
import Donut from "../components/Donut";
import Card from "./Card";
import TraffiCard from "./TrafficCard"
const Center = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="p-8">
        <div className="flex justify-between md:w-[80vw] w-full">
          <div className="flex gap-4">
            <img
              src={char}
              className="w-12 h-12 p-4 rounded-xl bg-gray-200"
              alt=""
            />
            <h1 className="text-[24px] font-bold flex gap-2">
              Boro Team{" "}
              <img
                src={down}
                alt=""
                className="w-fit h-fit self-center p-1 bg-gray-200 rounded-md"
              />
            </h1>
            <img src={add} alt="" className="w-fit h-fit self-center" />
          </div>
          <div className="flex gap-4 ">
            <img src={img} className="" alt="" />
            <h1 className="text-[20px] font-bold flex gap-2 w-fit">
              Zahra hasht..
              <img
                src={down}
                alt=""
                className="w-fit h-fit self-center p-1 bg-gray-200 rounded-md"
              />
            </h1>
          </div>
        </div>
        <div className="md:flex block justify-between w-[80vw] mt-10">
          <div className="flex  gap-4">
            <h1 className="text-[36px] font-bold flex gap-2">
              Poroject statistic{" "}
            </h1>
            <img src={add} alt="" className="w-fit h-fit self-center" />
          </div>
          <div className="flex gap-6 ">
            <h2 className="p-4 bg-gray-300 rounded-full hover:bg-[#7166F9]">
              30 days
            </h2>
            <h2 className="p-4 bg-gray-300 rounded-full hover:bg-[#7166F9]">
              90 days
            </h2>
            <h2 className="p-4 bg-gray-300 rounded-full hover:bg-[#7166F9]">
              6 months
            </h2>
            <h2 className="p-4 bg-gray-300 rounded-full hover:bg-[#7166F9]">
              12 months
            </h2>
          </div>
        </div>
        <div className=" block md:flex lg:block xl:flex  mt-6 p-6">
          <div className=" w-[100vw] md:w-[35vw] h-[42vh] bg-[#EDEDF6]  rounded-2xl p-6 mb-4">
            <div className="flex justify-between">
              <h1 className="text-[20px]">Total Visits</h1>
              <span className="text-[28px] text-[#7166F9] font-bold">
                42.43M
              </span>
            </div>
            <Graph />
          </div>
          <div className="px-2 w-[45vw]">
            <div className="flex gap-6 flex-col md:flex-row ">
              <Card name="Bounce rate" incRate="12%" percentage="42,34%" img={stat} incRateImg={green} icon={question}/>
              <Card name="Pages per visit" incRate="" percentage="42,34%" img={calender} icon={question}/>
            </div>
            <div className="flex gap-6 flex-col md:flex-row mt-6">
            <Card name="Total monthly visit" incRate="2.1%" percentage="42,34%" img={person} incRateImg={red}/>
            <Card name="Avg. Visit Duration" incRate="2.4%" percentage="00:03:27" img={time} incRateImg={red} />
            </div>
          </div>
        </div>
        <div className="md:flex block gap-4 px-6">
          <TraffiCard name="Traffic Sources"/>
          <TraffiCard name="Traffic Sources"/>
        </div>
      </div>
    </div>
  );
};

export default Center;

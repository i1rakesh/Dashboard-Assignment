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
              <div class="w-[100vw] md:w-1/2 px-2">
                <div class="bg-[#EDEDF6] p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 to-90%">
                  <div className="flex justify-between mb-10">
                    <img src={stat} alt="" />
                    <div className="flex">
                      <img className="w-fit h-fit self-center" src={green} alt="" />
                      <h5>12%</h5>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-[24px] font-bold">42,34</h1>
                      <h4>Bounce rate</h4>
                    </div>
                    <img src={add} alt="" className="h-fit w-fit" />
                  </div>
                </div>
              </div>
              <div class="w-[100vw] md:w-1/2 px-2">
                <div class="bg-[#EDEDF6] p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 to-90%">
                  <div className="flex justify-between mb-10">
                    <img src={calender} alt="" />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <div>
                      <h1 className="text-[24px] font-bold">42,34</h1>
                      <h4>Pages per visit</h4>
                      </div>
                      <img className="w-fit h-fit" src={question} alt="" />
                    </div>
                    <img src={add} alt="" className="h-fit w-fit" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 flex-col md:flex-row mt-6">
              <div className="w-[100vw] md:w-1/2 px-2">
                <div className="bg-[#EDEDF6] p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 to-90%">
                  <div className="flex justify-between mb-10">
                    <img src={person} alt="" />
                    <div className="flex">
                      <img className="w-fit h-fit self-center" src={red} alt="" />
                      <h5>2,1%</h5>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-[24px] font-bold">326.60K</h1>
                      <h4>Total monthly Visit</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[100vw] md:w-1/2 px-2">
                <div class="bg-[#EDEDF6] p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 to-90%">
                  <div className="flex justify-between mb-10">
                    <img src={time} alt="" />
                    <div className="flex">
                      <img className="w-fit h-fit self-center" src={red} alt="" />
                      <h5>2,1%</h5>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-[24px] font-bold">00:03:27</h1>
                      <h4>Avg. Visit Duaration</h4>
                    </div>
                    <img src={add} alt="" className="h-fit w-fit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex block gap-4 px-6">
          <div className="bg-[#EDEDF6] w-[100vw] lg:w-1/2 md:w-1/2 p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 mb-4">
            <h1 className="text-[24px] font-bold">Traffic Source</h1>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Donut />
          </div>
          <div className="bg-[#EDEDF6] w-[100vw] md:w-1/2 p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500">
            <h1 className="text-[24px] font-bold">Traffic Source</h1>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Donut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;

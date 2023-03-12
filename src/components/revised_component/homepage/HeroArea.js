import React from "react";

function HeroArea() {
  return (
    <div className="flex justify-center flex-col items-center h-screen pb-10 pl-[150px] pr-[120px] min-w-[688px]  ">
      <div className="flex">
        <div className="w-[50%] mr-6 flex justify-center flex-col items-center">
          <h1 className=" text-[50px] md:text-[60px]">
            Naf Tech <br/>Device <br/>Controller System
          </h1>
        </div>
        <div className="w-[50%]  flex justify-center flex-col items-center min-w-[220px] ">
          <button className="bg-[#39A2BF] px-12 py-4 md:text-[30px] lg:text-[35px]  text-white rounded-md ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;

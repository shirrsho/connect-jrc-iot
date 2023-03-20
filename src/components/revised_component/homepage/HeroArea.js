import React from "react";

function HeroArea() {
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-cover bg-center pb-10 pl-[150px] pr-[120px] min-w-[688px]   "  style={{
      backgroundImage: "url('Images/bg/homepage.png')"
    }}>
      <div className="flex flex-col">
        <div className="mr-6 flex justify-center flex-col items-center">
          <h1 className=" text-[50px] mb-16 text-center text-white md:text-[60px]">
            Naf Tech <br/>Device Controller System
          </h1>
        </div>
        <div className="flex justify-center flex-col items-center mb-[180px] min-w-[220px] ">
          <button className="bg-white px-12 py-4 md:text-[30px] lg:text-[35px]  text-black rounded-2xl ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;

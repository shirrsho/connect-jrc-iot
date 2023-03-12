import React from "react";

function Navbar({ color }) {
  console.log(color);
  return (
    <div
      className={`${color} flex justify-between px-[100px] text-[#C9E4CA]  min-w-[688px]`}
    >
      <div className=" flex">
        <div>
          <img
            src="/Images/icon/Logo.png"
            width="168px"
            className="cursor-pointer"
            height="60px"
          />
        </div>
        <div className="mt-2">
          <ul className="flex justify-center cursor-pointer">
            <li className="p-3">Blog</li>
            <li className="p-3">About Us</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-2">
          <ul className="flex justify-center cursor-pointer">
            <li className="p-3">Sign Up</li>
            <li className="p-3">Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

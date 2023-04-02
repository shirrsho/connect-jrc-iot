import React from "react";
import { Link } from "react-router-dom";
function Navbar({ color }) {
  console.log(color);
  return (
    <div
      className={`${color} flex justify-between px-[100px] py-2 text-[#C9E4CA]  min-w-[688px]`}
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
            <li className="p-3">
              <Link to="/register">Sign Up</Link>
            </li>
            <li className="p-3">
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React,{useState} from "react";
import {logout,auth} from "../../database//auth_database_firebase"
import { useAuthState } from "react-firebase-hooks/auth";
function NavbarCommon({ color }) {
  const [user, loading, error] = useAuthState(auth);
  const [userstate, setUserstate] = useState(true);
  function logsout() {
    if (logout()) setUserstate(!userstate);
  }
  console.log(color);
  return (
    <div
      className={`${color} flex justify-between px-[15%] text-[#C9E4CA] py-2 min-w-[688px]`}
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
            <li className="p-3">How to Use?</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-2">
          <ul className="flex justify-center cursor-pointer">
            <li className="p-3" onClick={logsout}>Logout</li>
            <li className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarCommon;

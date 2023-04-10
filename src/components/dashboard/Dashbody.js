import DeviceLinks from "../device_management/DeviceLinks";
import React, { useEffect, useState } from "react";
import { logout,auth } from "../database/auth_database_firebase"

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { UsersIcon } from "@heroicons/react/24/solid";
import {
  addNewDevice,
  getAllDevices,
  initPins,
} from "../device_management/functionalities";

function Dashbody() {
  // <-- User Management ...
  const [user, loading, error] = useAuthState(auth);
  function logsout() {
    if (logout()) setUserstate(!userstate);
  }
  // ... User Management -->

  // <-- UI functionalities ...
  const navigate = useNavigate();
  const [userstate, setUserstate] = useState(true);

  useEffect(() => {
    if (loading) {
      load();
    } else if (!user) navigate("/homepage");
    else get_devices();
  }, [user, loading, userstate]);

  const load = () => {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  };

  const [isSaveWindowOpen, setIsSaveWindowOpen] = useState(false);

  const handleOpen = () => {
    setIsSaveWindowOpen(true);
  };
  const handleClose = () => {
    setIsSaveWindowOpen(false);
  };
  // ... UI funcionalities -->

  // <-- Device Management ...
  const [devices, setDevices] = useState([]);
  const [device_name, setDevice_name] = useState("");
  const [chip_name, setChip_name] = useState("");

  async function add_device() {
    let device_id = null;
    try {
      device_id = await addNewDevice(user.uid, device_name, chip_name);
    } catch (err) {
      alert(err.message);
      return false;
    }
    setIsSaveWindowOpen(false);
    // initPins(device_id);
    // devscopy.push(device);
    // setDevices(devscopy);
    await get_devices();
    return true;
  }
  async function get_devices() {
    setDevices(await getAllDevices(user.uid));
  }
  // ... Device Management -->

  // <-- Search Management ...
  const [searchInput, setsearchInput] = useState("");

  function handleSearch() {
    let newdevs = [];
    devices.forEach((device) => {
      if (device.name.toLowerCase().includes(searchInput.toLowerCase()))
        newdevs.push(device);
    });
    setDevices(newdevs);
  }
  function resetSearch() {
    setsearchInput("");
    get_devices();
  }
  // ... Search management -->

  return (
    <>
      {/*first segement */}
      <div className="flex mx-[15%] my-[100px] relative">
        <div className="w-[50%] flex">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border-b border-gray-400 min-w-[180px] bg-[#A3A3A3] text-white rounded-sm mt-3  w-[40%] text-2xl "
          />
          <button className="ml-[-40px] mt-4 text-lg text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <button className="pl-7 mt-4 text-lg"> Search</button>
          <button className="pl-4 mt-4 text-lg"> Reset</button>
        </div>
        <div className=" w-[50%] relative flex-col items-center">
          <div className="flex absolute right-0 text-white text-lg bg-[#052C39] px-4 py-3  mt-[9px] rounded-sm hover:cursor-pointer hover:text-[#FEFF01] hover:bg-[#083763] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>

            <button className="pl-3 text-lg" onClick={handleOpen}>
              {" "}
              Add Device
            </button>
            <div>
              {isSaveWindowOpen && (
                <div className="fixed z-30 top-0 left-0 h-screen w-screen flex items-center  justify-center bg-gray-900 bg-opacity-75">
                  <div className="bg-white px-[75px] py-[100px] rounded-sm">
                    <div className="mt-2 p-10 text-black  flex flex-col justify-center">
                      <input
                        className=" p-3  placeholder-gray-600 bg-[#D9D9D9] hover:border-b rounded-sm mt-4 text-center"
                        type="text"
                        placeholder="Device Name"
                        value={device_name}
                        onChange={(e) => setDevice_name(e.target.value)}
                      />
                      <input
                        className=" p-3  placeholder-gray-600 bg-[#D9D9D9]  hover:border-b rounded-sm mt-4 text-center"
                        type="text"
                        placeholder="Microcontroller"
                        value={chip_name}
                        onChange={(e) => setChip_name(e.target.value)}
                      />
                      <div className="flex justify-center">
                        <button
                          className="bg-[#5791A1] hover:border-b text-white py-3 mt-4 px-[90px] rounded-sm "
                          onClick={add_device}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*second segement */}
      <div className="mx-[15%] bg-gray-200 h-screen">
        {/*second segement */}
        <div>
          <div className="w-[100%] bg-[#5791A1] my-3">
            <ul className="flex  text-white text-center text-sm sm:text-md md:text-xl mx-3 p-5">
              <li className="w-[8%]">SL</li>
              <li className="w-[16%]">Device Name</li>
              <li className="w-[16%]">Microcontroller</li>
              <li className="w-[16%]">Controller</li>
              <li className="w-[16%]">Status</li>
              <li className="w-[16%]">Date Added</li>
              <li className="w-[12%] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </li>
            </ul>
          </div>
          {devices && (
            <div>
              <DeviceLinks
                devicelist={devices}
                setDevicelist={setDevices}
                user_id={user?.uid}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashbody;

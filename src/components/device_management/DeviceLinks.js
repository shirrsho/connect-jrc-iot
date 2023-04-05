import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteDevice, editDevice } from "./functionalities";

function DeviceLinks({ devicelist, setDevicelist, user_id }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(-1);
  // const [showingdevices, setShowingDevices] = useState(devicelist)

  const handleMouseEnter = (key) => {
    // console.log(showPopup, key);
    setShowPopup(key);
  };

  const handleMouseLeave = (key) => {
    setShowPopup(key);
  };

  function edit_device(device_id) {
    editDevice(device_id, user_id);
  }

  async function delete_device(device_id) {
    if (await deleteDevice(device_id, user_id))
      setDevicelist(devicelist.filter((item) => item.id !== device_id));
    // setShowingDevices(showingdevices.filter(item => item.id !== device_id))
  }

  // function forwardTo(device) {
  //     navigate("/deviceview/${" + device.id + "}",
  //         { state: { device } });
  // }
  return (
    <>
      {devicelist.map((deviceinfo, i) => {
        return (
          <div
            className="w-[100%] bg-gray-100 py-1 hover:cursor-pointer hover:shadow-lg relative "
            key={i}
          >
            <ul className="flex text-xl mx-3 p-5 text-center hover:shadow-md">
              <li className="w-[8%]">
                <Link to={`/device/${deviceinfo.id}`}>{i + 1}</Link>
              </li>
              <li className="w-[16%]">
                <Link to={`/device/${deviceinfo.id}`}>{deviceinfo.name}</Link>
              </li>
              <li className="w-[16%]">
                <Link to={`/device/${deviceinfo.id}`}>JRC Board</Link>
              </li>
              <li className="w-[16%]">
                <Link to={`/device/${deviceinfo.id}`}>
                  {deviceinfo.n_widgets}
                </Link>
              </li>
              <li className="w-[16%]">
                <Link to={`/device/${deviceinfo.id}`}>Offline</Link>
              </li>
              <li className="w-[16%]">
                <Link to={`/device/${deviceinfo.id}`}>05/02/2023</Link>
              </li>
              <li
                className="w-[12%] flex justify-center"
                onMouseLeave={() => handleMouseLeave()}
                onMouseEnter={() => handleMouseEnter(i)}
              >
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </li>
            </ul>

            {showPopup === i && (
              <div
                className="bg-white absolute   px-3 -right-3 top-6 h-auto w-auto shadow-lg border-[1px] z-20 "
                onMouseLeave={() => handleMouseLeave()}
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <button
                  onClick={() => edit_device(deviceinfo.id)}
                  className="flex py-2 pt-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                  </svg>
                  &nbsp; Edit
                </button>
                <button
                  onClick={() => delete_device(deviceinfo.id)}
                  className="flex py-2 pb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  &nbsp; Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default DeviceLinks;

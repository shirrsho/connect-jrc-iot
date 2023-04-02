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

  const handleMouseLeave = () => {
    setShowPopup(-1);
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
            className="w-[100%] bg-gray-100 py-1 hover:cursor-pointer hover:shadow-lg  "
            key={i}
          >
            
              <ul className="flex text-xl mx-3 p-5 text-center hover:shadow-md">
              
                <li className="w-[8%]"><Link to={`/device/${deviceinfo.id}`}>{i + 1}</Link></li>
                <li className="w-[16%]"><Link to={`/device/${deviceinfo.id}`}>{deviceinfo.name}</Link></li>
                <li className="w-[16%]"><Link to={`/device/${deviceinfo.id}`}>JRC Board</Link></li>
                <li className="w-[16%]"><Link to={`/device/${deviceinfo.id}`}>{deviceinfo.n_widgets}</Link></li>
                <li className="w-[16%]"><Link to={`/device/${deviceinfo.id}`}>Offline</Link></li>
                <li className="w-[16%]"><Link to={`/device/${deviceinfo.id}`}>05/02/2023</Link></li>
                <li className="w-[12%] flex justify-center" onClick={()=>handleMouseEnter(i)}>
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
              <div>
                <button onClick={() => edit_device(deviceinfo.id)}>Edit</button>
                <button onClick={() => delete_device(deviceinfo.id)}>
                  Delete
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

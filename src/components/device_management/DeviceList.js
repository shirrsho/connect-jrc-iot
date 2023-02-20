import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDevice, editDevice } from "./functionalities";

function DeviceLinks({ devicelist, user_id }) {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(-1);
    const [showingdevices, setShowingDevices] = useState(devicelist)

    const handleMouseEnter = (key) => {
        // console.log(showPopup, key);
        setShowPopup(key);
    };

    const handleMouseLeave = () => {
        setShowPopup(-1);
    };

    function edit_device(device_id){
        editDevice(device_id, user_id)
    }
    
    function delete_device(device_id){
        if(deleteDevice(device_id, user_id))
            setShowingDevices(showingdevices.filter(item => item.id !== device_id))
    }


    function forwardTo(device) {
        navigate("/deviceview/${" + device.id + "}",
            { state: { device } });
    }
    return (
        <>
            {showingdevices.map((deviceinfo, i) => {
                return (
                    <div
                        className="w-[100%] bg-gray-100 my-3 hover:cursor-pointer hover:shadow-lg  "
                        key={i}
                        onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave}
                    >
                        <ul onClick={() => forwardTo(deviceinfo)} className="flex text-xl mx-3 p-5 text-center hover:text-2xl">
                            <li className="w-[8%]">{i + 1}</li>
                            <li className="w-[16%]">{deviceinfo.name}</li>
                            <li className="w-[16%]">JRC Board</li>
                            <li className="w-[16%]">{deviceinfo.chip}</li>
                            <li className="w-[16%]">5</li>
                            <li className="w-[16%]">Offline</li>
                            <li className="w-[12%]">05/02/2023</li>
                        </ul>
                        {showPopup === i && (
                            <div>
                                <button onClick={()=>edit_device(deviceinfo.id)}>Edit</button>
                                <button onClick={()=>delete_device(deviceinfo.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}

export default DeviceLinks;

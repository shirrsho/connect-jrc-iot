    import React from "react";

    function DeviceLinks({ devicelist }) {
    return (
        <>
        {devicelist.map((deviceinfo) => {
            const {
            sl,
            device_name,
            microcontroller,
            microprocessor,
            controller,
            status,
            date,
            } = deviceinfo;
            return (
            <div className="w-[100%] bg-gray-100 my-3 hover:cursor-pointer hover:shadow-lg  ">
                <ul className="flex text-xl mx-3 p-5 text-center hover:text-2xl">
                <li className="w-[8%]">{sl}</li>
                <li className="w-[16%]">{device_name}</li>
                <li className="w-[16%]">{microcontroller}</li>
                <li className="w-[16%]">{microprocessor}</li>
                <li className="w-[16%]">{controller}</li>
                <li className="w-[16%]">{status}</li>
                <li className="w-[12%]">{date}</li>
                </ul>
            </div>
            );
        })}
        </>
    );
    }

    export default DeviceLinks;

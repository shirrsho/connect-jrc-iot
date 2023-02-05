    import React from "react";

    function DeviceLinks({ devicelist }) {
    return (
        <>
        {
        devicelist.map((deviceinfo) => {
            // const {
            // name,
            // chip,
            // microprocessor,
            // controller,
            // status,
            // date,
            // } = deviceinfo;
            return (
            <div className="w-[100%] bg-gray-100 my-3 hover:cursor-pointer hover:shadow-lg  ">
                <ul className="flex text-xl mx-3 p-5 text-center hover:text-2xl">
                <li className="w-[8%]">1</li>
                <li className="w-[16%]">{deviceinfo.name}</li>
                <li className="w-[16%]">JRC Board</li>
                <li className="w-[16%]">{deviceinfo.chip}</li>
                <li className="w-[16%]">5</li>
                <li className="w-[16%]">Offline</li>
                <li className="w-[12%]">05/02/2023</li>
                </ul>
            </div>
            );
        })}
        </>
    );
    }

    export default DeviceLinks;

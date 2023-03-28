    import React from "react";

    function Devbody() {
    return (
        <>
        {/*First Segment*/}
        <div className="mx-[15%] flex text-2xl justify-between">
            <h1 className="py-5 ">Device Name</h1>
            <div>
            <ul className="flex  cursor-pointer">
                <li className="p-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                </svg>
                </li>
                <li className="p-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-7 h-7"
                >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
                </li>
                <li className="py-5 text-red-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
                </li>
            </ul>
            </div>
        </div>
        {/*second segement*/}
        <div className="mx-[15%] h-[200px] flex  bg-gray-300">
            <div className="w-1/4 border-r h-[200px] flex justify-center flex-col items-center text-center border-[#5791A1]">
            <h1 className="text-2xl font-semibold  ">
                Click on a widget to add it to the device
            </h1>
            </div>
            <div className="w-3/4 bg-red-500 overflow-hidden  flex  pt-[22px]">
            <img
                src="/Images/WIDGET/Frame 10.png"
                className="px-8  py-3 cursor-pointer hover:scale-105 h-[160px] w-[300px] transform transition duration-500 ease-in-out rounded-lg"
            />
            <img
            src="/Images/WIDGET/Frame 10.png"
            className="px-8  py-3 cursor-pointer hover:scale-105 h-[160px] w-[300px] transform transition duration-500 ease-in-out rounded-lg"
        />
        <img
        src="/Images/WIDGET/Frame 10.png"
        className="px-8  py-3 cursor-pointer hover:scale-105 h-[160px] w-[300px] transform transition duration-500 ease-in-out rounded-lg"
    />
            </div>
        </div>
        </>
    );
    }

    export default Devbody;

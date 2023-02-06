    import { UsersIcon } from "@heroicons/react/24/solid";
import Widget from "../widget/Widget";
    const DeviceView = (uid) => {
    return (
        <div className="flex">
        <div className="w-[5%] h-screen flex justify-center relative  ">
            <div className=" absolute bottom-0">
            <UsersIcon className="h-14 w-14" />
            </div>
        </div>
        <div className="w-[95%] h-screen  pt-16 ">
            <div>
            <img src="Images/Vector.png" className="py-" />
            <div className="w-[70%] flex justify-between text-[40px] py-2">
                <h1>Device Name</h1>
                <h1>Edit Layout</h1>
            </div>
            <div className="bg-gray-200 flex h-screen opacity-85 ">
            <div className="w-[70%]"></div>
            <div className="w-[30%] bg-gray-500 flex-col items-center py-10 flex justify-center"><Widget/><Widget/></div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default DeviceView;

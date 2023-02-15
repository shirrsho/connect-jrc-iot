    import React, { ReactDOM, useEffect, useState } from "react";
    import { auth } from "../database/auth_database_firebase";
    import { useAuthState } from "react-firebase-hooks/auth";
    import { useNavigate } from "react-router-dom";
    import { UsersIcon } from "@heroicons/react/24/solid";
    import { useLocation } from "react-router-dom";
    import Widget from "../widget_management/Widget";

    const DeviceView = () => {
    const location = useLocation();
    const device = location.state?.device;
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log("device name " + device.name);
    const [widgetselectors, setWidgetselectors] = useState([{}]);
    // widgetselectors.push({type:"switch",datastream:null});
    //     widgetselectors.push({type:"regulator",datastream:null});
    //     widgetselectors.push({type:"display",datastream:null});
    // function setWidgetselectors() {

    //     console.log(widgetselectors);
    // }

    function addWidget(type) {
        let widgetshere = [];
        if (widgetselectors) widgetshere = widgetselectors;
        widgetshere.push(type);
        setWidgetselectors(widgetshere);
        console.log(widgetshere);
        console.log(widgetselectors);
    }

    useEffect(() => {
        setWidgetselectors();
        if (loading) {
        return;
        } else if (!user) navigate("/");
    }, [user, loading]);

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
            <div className="w-[75%] flex justify-between text-[40px] py-2">
                <h1>{device.name}</h1>
                <button>
                <p>Edit Layout</p>
                </button>
            </div>
            <div className="bg-gray-200 flex  overflow-y-auto  opacity-85 ">
                <div className="w-[75%]"></div>
                <div className="w-[25%] bg-gray-400 flex-col items-center py-10 flex justify-center">
                <div onClick={() => addWidget("switch")}>
                    <img
                    src="/Images/WIDGET/Frame 7.png"
                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out "
                    />
                </div>
                <div onClick={() => addWidget("regulator")}>
                    <img
                    src="/Images/WIDGET/Frame 9.png"
                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out "
                    />{" "}
                </div>
                <div onClick={() => addWidget("display")}>
                    <img
                    src="/Images/WIDGET/Frame 8.png"
                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out "
                    />
                </div>
                <div onClick={() => addWidget("messagebox")}>
                    <img
                    src="/Images/WIDGET/Frame 10.png"
                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out "
                    />
                </div>
                {/* {widgetselectors?.map(widget => (
                                    <h1 key={widget.type}>LOL{widget.type}</h1>
                                ))} */}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default DeviceView;

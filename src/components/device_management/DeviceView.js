import React, { ReactDOM, useEffect, useState } from "react";
import { auth } from "../database/auth_database_firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { getADevice } from "./functionalities";
import Widget from "../widget_management/Widget";
import Datastream from "../widget_management/Datastream";

const DeviceView = () => {
    const { id } = useParams();
    
    // console.log(id);
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [device, setDevice] = useState(null);
    const navigate = useNavigate();
    const [widgetselectors, setWidgetselectors] = useState([]);
    const [datastream, setDatastream] = useState(null);

    function addWidget(type) {
        device.addWidget(type);
        setWidgetselectors([...widgetselectors, type]);
        // console.log(device);
    }

    async function init_device(){
        setDevice(await getADevice(user.uid,id))
    }

    useEffect(() => {
        if (loading) {
            return;
        } else if (!user) navigate("/");
        else init_device()
    }, [user, loading, datastream]);

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
                        <h1>{device?.name}</h1>
                        <button>
                            <p>Edit Layout</p>
                        </button>
                    </div>
                    <div className="bg-gray-200 flex  overflow-y-auto  opacity-85 ">
                        <div className="w-[78%]  flex justify-start pl-6 py-7  flex-wrap">
                            {widgetselectors?.map((widgetselector, key) => {
                                // console.log(widgetselector);
                                // setDatastream(Datastream(widgetselector))
                                return <Widget type={widgetselector} datastream={Datastream(widgetselector)} setDatastream={setDatastream} device key={key}/>;
                            })}
                           
                        </div>

                        <div className="w-[22%] bg-gray-400 flex-col z-10 items-center py-10 flex justify-center">
                            <div onClick={() => addWidget("switch")}>
                                <img
                                    src="/Images/WIDGET/Frame 7.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />
                            </div>
                            
                            <div onClick={() => addWidget("regulator")}>
                                <img
                                    src="/Images/WIDGET/Frame 9.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />
                            </div>
                            
                            <div onClick={() => addWidget("display")}>
                                <img
                                    src="/Images/WIDGET/Frame 8.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />{" "}
                            </div>
                            
                            <div onClick={() => addWidget("messagebox")}>
                                <img
                                    src="/Images/WIDGET/Frame 10.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
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

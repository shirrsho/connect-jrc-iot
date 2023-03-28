import React, { ReactDOM, useEffect, useState } from "react";
import { auth } from "../database/auth_database_firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { deleteWidget, getADevice, getAllWidgets } from "./functionalities";
import WidgetView from "../widget_management/WidgetView";
import Datastream from "../widget_management/Datastream";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DeviceView = () => {
    const { id } = useParams();

    // console.log(id);
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [device, setDevice] = useState(null);
    const navigate = useNavigate();
    const [widgets, setWidgets] = useState([]);
    const [widgetselectors, setWidgetselectors] = useState([]);
    const [datastream, setDatastream] = useState(null);
    const code = `
#include "ndcs_esp32.h"

char* wifi_ssid = "";               // put your wifi ssid in between the quotes
char* wifi_password = "";           // put your wifi password in between the quotes
char* email = "${user?.email}";
char* password = "";                // put your account's password in between the quotes
char* device_id = "${device?.getDeviceID()}";

NDCS Ndcs;

void setup() {
    Ndcs.begin(wifi_ssid,wifi_password,email,password,device_id);
    //Your code here
}

void loop() {
    Ndcs.loop();
    // Your code here
}
    `;
    async function addWidget(type) {
        if (await device.addWidget(type))
            init_widgets()
        else alert("widget adding failed")
        // setWidgetselectors([...widgetselectors, type]);
        // console.log(device);
    }
    async function delete_widget(widget_id) {
        if (await device.removeWidget(widget_id)) {
            setWidgets(widgets.filter(item => item.widget_id !== widget_id))
            // setShowingDevices(showingdevices.filter(item => item.id !== device_id))
        }
        else alert("widget deletion failed")
    }

    async function init_device() {
        setDevice(await getADevice(user.uid, id))
        // init_widgets()
        // setWidgetselectors([...widgetselectors, ...device?.getWidgets()])
    }
    async function init_widgets() {
        device ? setWidgets([... await device.fetchWidgets(id)]) : console.log("widget updating...");
    }

    useEffect(() => {
        // device?setWidgetselectors([...device?.getWidgets()]):console.log("device updating...");
        init_widgets()
        // device?setTimeout(()=>{ let wids = await device?.fetchWidgets();console.log("wids:"+wids); setTimeout(()=>{setWidgets([...wids])},1000)},1000):console.log("widgets updating...");
    }, [device])

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
                        <div className="w-[30%] justify-start bg-black-500">
                            <p>Include the following code to your device:</p>
                        <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                            {code}
                        </SyntaxHighlighter>
                        </div>
                        <div className="w-[78%]  flex justify-start pl-6 py-7  flex-wrap">
                            {widgets?.map((widgetselector, key) => {
                                // console.log(widgetselector);
                                {/* console.log("up",widgets); */ }
                                return <WidgetView device_id={device.getDeviceID()} widget={widgetselector} delete_widget={delete_widget} key={key} />;
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

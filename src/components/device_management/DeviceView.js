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
    console.log("device name " + device.name);
    let widgetselectors = [];

    function setWidgetselectors() {
        widgetselectors.push(Widget("switch"));
        widgetselectors.push(Widget("regulator"));
        widgetselectors.push(Widget("display"));
        // console.log(wid);
    }

    useEffect(() => {
        if (loading) {
            return;
        } else if (!user) navigate("/");
        setWidgetselectors();
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
                    <div className="w-[70%] flex justify-between text-[40px] py-2">
                        <h1>{device.name}</h1>
                        <button>
                            <p>Edit Layout</p>
                        </button>
                    </div>
                    <div className="bg-gray-200 flex h-screen opacity-85 ">
                        <div className="w-[70%]"></div>
                        <div className="w-[30%] bg-gray-500 flex-col items-center py-10 flex justify-center">
                            <Widget type="switch" />
                            <Widget type="regulator" />
                            <Widget type="display" />
                            <Widget type="message" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceView;

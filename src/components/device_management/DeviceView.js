import React, { ReactDOM, useEffect, useState } from "react";
import { auth } from "../database/auth_database_firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import Widget from "../widget_management/Widget";
import Datastream from "../widget_management/Datastream";
import Form from "../widget_management/widget_form/Form";

const DeviceView = () => {
    //switch start

    const [modalSwitch, setModalSwitch] = useState(false);
    function openSwitchModal() {
        setModalSwitch(true);
    }
    function closeSwitchModal() {
        setModalSwitch(false);
    }
    //switch end
    //display start

    const [modalDisplay, setModalDisplay] = useState(false);
    function openDisplayModal() {
        setModalDisplay(true);
    }
    function closeDisplayModal() {
        setModalDisplay(false);
    }
    //display end

    //regulator start

    const [modalRegulator, setModalRegulator] = useState(false);
    function openRegulatorModal() {
        setModalRegulator(true);
    }
    function closeRegulatorModal() {
        setModalRegulator(false);
    }
    //regulator end

    //message start

    const [modalMesssage, setModalMessage] = useState(false);
    function openMessageModal() {
        setModalMessage(true);
    }
    function closeMessageModal() {
        setModalMessage(false);
    }
    //message end



    function handleCloseModal() { }
    const location = useLocation();
    const device = location.state?.device;
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [widgetselectors, setWidgetselectors] = useState([]);

    function addWidget(type) {
        let datastream = Datastream(type);
        setWidgetselectors([...widgetselectors, datastream]);
        // console.log(datastream);
    }

    useEffect(() => {
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
                        <div className="w-[75%] flex justify-start py-8 mx-[5%] flex-wrap">
                            {widgetselectors?.map((widgetselector, key) => {
                                // console.log(widgetselector);
                                return <Widget datastream={widgetselector} key={key} />;
                            })}
                        </div>
                        <div className="w-[25%] bg-gray-400 flex-col items-center py-10 flex justify-center">
                            <div onClick={openSwitchModal}>
                                <img
                                    src="/Images/WIDGET/Frame 7.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />
                            </div>
                            {modalSwitch && (
                                <Form
                                    onAddWidget={() => addWidget("switch")}
                                    onCloseModal={closeSwitchModal}
                                />
                            )}
                            <div onClick={openRegulatorModal}>
                                <img
                                    src="/Images/WIDGET/Frame 9.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />
                            </div>
                            {modalRegulator && (
                                <Form
                                    onAddWidget={() => addWidget("regulator")}
                                    onCloseModal={closeRegulatorModal}
                                />
                            )}
                            <div onClick={openDisplayModal}>
                                <img
                                    src="/Images/WIDGET/Frame 8.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />{" "}
                            </div>
                            {modalDisplay && (
                                <Form
                                    onAddWidget={() => addWidget("display")}
                                    onCloseModal={closeDisplayModal}
                                />
                            )}
                            <div onClick={openMessageModal}>
                                <img
                                    src="/Images/WIDGET/Frame 10.png"
                                    className="px-8  py-3 cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out rounded-lg"
                                />
                            </div>
                            {modalMesssage && (
                                <Form
                                    onAddWidget={() => addWidget("messagebox")}
                                    onCloseModal={closeMessageModal}
                                />
                            )}
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

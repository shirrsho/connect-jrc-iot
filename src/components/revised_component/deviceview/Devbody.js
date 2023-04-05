import React, { ReactDOM, useEffect, useState } from "react";
import { auth } from "../../database/auth_database_firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import WidgetView from "../../widget_management/WidgetView";
import {
  deleteWidget,
  getADevice,
  getAllWidgets,
} from "../../device_management/functionalities";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
function Devbody() {
  const { id } = useParams();
  const [showCode, setShowCode] = useState(false);
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
    if (await device.addWidget(type)) init_widgets();
    else alert("widget adding failed");
    // setWidgetselectors([...widgetselectors, type]);
    // console.log(device);
  }
  async function delete_widget(widget_id) {
    if (await device.removeWidget(widget_id)) {
      setWidgets(widgets.filter((item) => item.widget_id !== widget_id));
      // setShowingDevices(showingdevices.filter(item => item.id !== device_id))
    } else alert("widget deletion failed");
  }

  async function init_device() {
    setDevice(await getADevice(user.uid, id));
    // init_widgets()
    // setWidgetselectors([...widgetselectors, ...device?.getWidgets()])
  }
  async function init_widgets() {
    device
      ? setWidgets([...(await device.fetchWidgets(id))])
      : console.log("widget updating...");
  }

  useEffect(() => {
    // device?setWidgetselectors([...device?.getWidgets()]):console.log("device updating...");
    init_widgets();
    // device?setTimeout(()=>{ let wids = await device?.fetchWidgets();console.log("wids:"+wids); setTimeout(()=>{setWidgets([...wids])},1000)},1000):console.log("widgets updating...");
  }, [device]);

  useEffect(() => {
    if (loading) {
      return;
    } else if (!user) navigate("/");
    else init_device();
  }, [user, loading, datastream]);

  //code syntax add section
  const [showPopup, setShowPopup] = useState(true);
  // const [showingdevices, setShowingDevices] = useState(devicelist)

  const handleMouseEnter = () => {
    // console.log(showPopup, key);
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  //copy button
  const [copied, setCopied] = useState(false);
  function handleCopyClick() {
    const textToCopy = document.querySelector(".text-to-copy").textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    });
  }

  return (
    <>
      {/*First Segment*/}
      <div className="mx-[15%] flex text-2xl justify-between relative">
        <h1 className="py-5 ">Device Name</h1>
        <div>
          <ul className="flex  cursor-pointer">
            <li
              className="p-5"
              onMouseLeave={() => handleMouseLeave()}
              onMouseEnter={() => handleMouseEnter()}
            >
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
        {showPopup && (
          <div
            className=" absolute px-9 pt-3 pb-8 z-10 bg-white border-gray-300 border-[1px] p-3 right-[120px] top-12 "
            onMouseLeave={() => handleMouseLeave()}
            onMouseEnter={() => handleMouseEnter()}
          >
            <div className="flex justify-between">
              <p>Include the following code to your device:</p>
              <div className="flex hover:text-green-700" onClick={handleCopyClick}>
                <span className="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
                </span>

                <button  className="pl-3">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <SyntaxHighlighter
              language="cpp"
              style={vscDarkPlus}
              className="text-to-copy"
              fontsize={28}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>

      {/*second segement*/}
      <div className="mx-[15%] h-[200px] flex  border-b border-[#22ffaa] bg-gray-300">
        <div className="w-1/5 border-r h-[200px] flex justify-center flex-col items-center text-center border-[#5791A1]">
          <h1 className="text-2xl  mx-3 ">Click on a widget</h1>
        </div>
        <div className="w-4/5    overflow-x-auto   flex  pt-[22px]">
          <img
            src="/Images/WIDGET/Display.png"
            onClick={() => addWidget("display")}
            className="px-8  py-3 cursor-pointer hover:scale-105 h-[160px] w-[300px] transform transition duration-500 ease-in-out rounded-lg"
          />
          <img
            src="/Images/WIDGET/Switch.png"
            onClick={() => addWidget("switch")}
            className="px-8  py-3 cursor-pointer hover:scale-105 h-[160px] w-[300px] transform transition duration-500 ease-in-out rounded-lg"
          />
          <img
            src="/Images/WIDGET/Regulator.png"
            onClick={() => addWidget("regulator")}
            className="px-8  py-3 cursor-pointer hover:scale-105 h-[160px] w-[300px] transform transition duration-500 ease-in-out rounded-lg"
          />
        </div>
      </div>
      {/**Third section */}
      <div className=" mx-[15%] bg-gray-300 h-screen p-2 flex justify-start flex-wrap my-1 overflow-y-auto ">
        {widgets?.map((widgetselector, key) => {
          // console.log(widgetselector);
          {
            /* console.log("up",widgets); */
          }
          return (
            <WidgetView
              device_id={device.getDeviceID()}
              widget={widgetselector}
              delete_widget={delete_widget}
              key={key}
            />
          );
        })}
      </div>
    </>
  );
}

export default Devbody;

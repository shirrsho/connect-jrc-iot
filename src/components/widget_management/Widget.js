import React from "react";
import Switch from "./widgets/Switch";
import Regulator from "./widgets/Regulator";
import Display from "./widgets/Display";
import MessageBox from "./widgets/MessageBox";
import "./widget-styles/default.css";

export default function Widget({ device_id, type, datastream, setDatastream }) {
  if (type === "switch") {
    return (
      <div className="w-[280px] bg-white h-[150px] px-4 rounded-sm mx-2">
        <Switch device_id={device_id} datastream={datastream} setDatastream={setDatastream}/>
     
      </div>
    );
  } else if (type === "regulator") {
    return (
      <div className="w-[280px] bg-white h-[150px]  px-4 rounded-sm mx-2">
        <Regulator device_id={device_id} datastream={datastream} setDatastream={setDatastream}/>
    
      </div>
    );
  } else if (type === "display") {
    return (
      <div className="w-[280px] bg-white h-[150px]  px-4 rounded-sm mx-2">
        <Display device_id={device_id} datastream={datastream} setDatastream={setDatastream} />
    
      </div>
    );
  } else if (type === "messagebox") {
    return (
      <div className="w-[280px] bg-white h-[150px]  px-4 rounded-sm mx-2">
        <MessageBox device_id={device_id} datastream={datastream} setDatastream={setDatastream}/>
    
      </div>
    );
  }
}

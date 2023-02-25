import React from "react";
import Switch from "./widgets/Switch";
import Regulator from "./widgets/Regulator";
import Display from "./widgets/Display";
import MessageBox from "./widgets/MessageBox";
import "./widget-styles/default.css";

export default function WidgetView({ device_id, widget, index }) {
  
  if (widget.type === "switch") {
    return (
      <div className="w-[280px] bg-white h-[150px] px-4 rounded-sm mx-2">
        <Switch device_id={device_id} widget={widget} index={index}/>
     
      </div>
    );
  } else if (widget.type === "regulator") {
    return (
      <div className="w-[280px] bg-white h-[150px]  px-4 rounded-sm mx-2">
        <Regulator device_id={device_id} widget={widget} index={index}/>
    
      </div>
    );
  } else if (widget.type === "display") {
    return (
      <div className="w-[280px] bg-white h-[150px]  px-4 rounded-sm mx-2">
        <Display device_id={device_id} widget={widget} index={index}/>
    
      </div>
    );
  } else if (widget.type === "messagebox") {
    return (
      <div className="w-[280px] bg-white h-[150px]  px-4 rounded-sm mx-2">
        <MessageBox device_id={device_id} widget={widget} index={index}/>
    
      </div>
    );
  }
}

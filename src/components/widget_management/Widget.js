import React from "react";
import Switch from "./widgets/Switch";
import Regulator from "./widgets/Regulator";
import Display from "./widgets/Display";
import MessageBox from "./widgets/MessageBox";
import './widget-styles/default.css'

export default function Widget({ datastream }) {
  // console.log(datastream);
  if (datastream.widget_type === "switch") {
    return <div className="default_widget px-8 mx-3"><Switch datastream={datastream} /></div>
  } else if (datastream.widget_type === "regulator") {
    return <div className="default_widget px-8 mx-3"><Regulator datastream={datastream} /></div>
  } else if (datastream.widget_type === "display") {
    return <div className="default_widget px-8 mx-3"><Display datastream={datastream} /></div>
  } else if (datastream.widget_type === "messagebox") {
    return <div className="default_widget px-8 mx-3"><MessageBox datastream={datastream} /></div>
  }
}
import React from "react";
import Switch from "./widgets/Switch";
import Regulator from "./widgets/Regulator";
import Display from "./widgets/Display";
import MessageBox from "./widgets/MessageBox";
import './widget-styles/default.css'

export default function Widget({ type }) {
  if (type === "switch") {
    return <div className="default_widget px-8 mx-3"><Switch /></div>
  } else if (type === "regulator") {
    return <div className="default_widget px-8 mx-3"><Regulator /></div>
  } else if (type === "display") {
    return <div className="default_widget px-8 mx-3"><Display /></div>
  } else if (type === "messagebox") {
    return <div className="default_widget px-8 mx-3"><MessageBox /></div>
  }
}
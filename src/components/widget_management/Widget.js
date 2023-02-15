import React from "react";
import Switch from "./controllers/Switch";
import Regulator from "./controllers/Regulator";
import Display from "./controllers/Display";
import MessageBox from "./controllers/MessageBox";
import './styles/default.css'

export default function Widget({ type }) {
  if (type === "switch") {
    return <div className="default_widget"><Switch /></div>
  } else if (type === "regulator") {
    return <div className="default_widget"><Regulator /></div>
  } else if (type === "display") {
    return <div className="default_widget"><Display /></div>
  } else if (type === "messagebox") {
    return <div className="default_widget"><MessageBox /></div>
  }
}
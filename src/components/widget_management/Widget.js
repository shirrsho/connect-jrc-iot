import React, { useState, useEffect } from "react";
import Switch from "./widgets/Switch";
import Regulator from "./widgets/Regulator";
import Display from "./widgets/Display";
import MessageBox from "./widgets/MessageBox";
import './widget-styles/default.css'
import SetSwitchData from './widget-forms/SetSwitchData'
import SetRegulatorData from './widget-forms/SetRegulatorData'
import SetDisplayData from './widget-forms/SetDisplayData'
import SetMessageBoxData from './widget-forms/setMessageBoxData'

export default function Widget({ type }) {
  let datastream = null // pull from database

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  if (type === "switch") {
    return <div className="default_widget px-8 mx-3"><Switch datastream={datastream} /></div>
  } else if (type === "regulator") {
    return <div className="default_widget px-8 mx-3"><Regulator datastream={datastream} /></div>
  } else if (type === "display") {
    return <div className="default_widget px-8 mx-3"><Display datastream={datastream} /></div>
  } else if (type === "messagebox") {
    return <div className="default_widget px-8 mx-3"><MessageBox datastream={datastream} /></div>
  }
}


import React from "react";
import Switch from "./controllers/Switch";
import Regulator from "./controllers/Regulator";
import Display from "./controllers/Display";
import MessageBox from "./controllers/MessageBox";

export default function Widget({ type }) {
  if (type === "switch") {
    return <Switch />
  } else if (type === "regulator") {
    return <Regulator />
  } else if (type === "display") {
    return <Display />
  } else if (type === "message") {
    return <MessageBox />
  }
}
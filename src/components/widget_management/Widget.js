import React from "react";

export default function Widget({ type, datastream=null }){
    if (type === "switch") {
        return <Switch/>
    } else if (type === "regulator") {
        return <Regulator/>
    } else if (type === "display") {
        return <Display/>
    } else if (type === "message") {
        return <Messagebox/>
    }
}

class Switch extends React.Component {
  render() {
    return <div>Hi, I am a Switch!</div>;
  }
}

class Regulator extends React.Component {
  render() {
    return <div>Hi, I am a Regulator!</div>;
  }
}

class Display extends React.Component {
  render() {
    return <div>Hi, I am a Display!</div>;
  }
}

class Messagebox extends React.Component {
  render() {
    return <div>Hi, I am a MessageBox!</div>;
  }
}

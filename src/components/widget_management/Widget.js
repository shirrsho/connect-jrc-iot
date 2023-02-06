import React from "react";

export default class Widget {
    constructor(name,device_id,datastream) {
        this.name = name
        this.datastream = datastream
        this.device_id = device_id
        this.createWidget = function (type) {
            let widget;

            if (type === "switch") {
                widget = new Switch();
            } else if (type === "regulator") {
                widget = new Regulator();
            } else if (type === "display") {
                widget = new Display();
            } else if (type === "message") {
                widget = new Messagebox();
            }

            widget.type = type;
            
            return widget;
        };
    }
    // say() {
    //     console.log("widget type: "+widget.type);
    // }
}

class Switch extends React.Component {
    constructor() {
        this.state = "OFF";
    }
    setState(state){
        this.state = state
    }
    getState(){
        return this.state
    }
    render() {
        return <div>Hi, I am a Switch!</div>;
    }
}

class Regulator extends React.Component {
    constructor() {
        this.value = 0.00;
    }
    setValue(value){
        this.value = value
    }
    getValue(){
        return this.value
    }
    render() {
        return <div>Hi, I am a Regulator!</div>;
    }
}

class Display extends React.Component {
    constructor() {
        this.value = 0.00;
    }
    setValue(value){
        this.value = value
    }
    getValue(){
        return this.value
    }
    render() {
        return <div>Hi, I am a Display!</div>;
    }
}

class Messagebox extends React.Component {
    constructor() {
        this.value = "Hello World!";
    }
    setValue(value){
        this.value = value
    }
    getValue(){
        return this.value
    }
    render() {
        return <div>Hi, I am a MessageBox!</div>;
    }
}

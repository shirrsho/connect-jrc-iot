export default class Datastream {
    constructor(pin,widget_id,device_id) {
        this.createDatastream = function (type) {
            let datastream;
            if (type === "switch") {
                widget = new Switch();
            } else if (type === "regulator") {
                widget = new Regulator();
            } else if (type === "display") {
                widget = new Display();
            }

            datastream.type = type;
            
            return datastream;
        };
    }
    // say() {
    //     console.log("widget type: "+widget.type);
    // }
}

class Switch {
    constructor() {
        this.hourly = "$12";
    }
    say() {
        console.log("widget type: ");
    }
}

class Regulator {
    constructor() {
        this.hourly = "$11";
    }
}

class Display {
    constructor() {
        this.hourly = "$10";
    }
}

export default class Widget {
    constructor(name,datastream) {
        this.name = name
        this.datastream = datastream
        this.createWidget = function (type) {
            let widget;

            if (type === "switch") {
                widget = new Switch();
            } else if (type === "regulator") {
                widget = new Regulator();
            } else if (type === "display") {
                widget = new Display();
            }

            widget.type = type;
            
            return widget;
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

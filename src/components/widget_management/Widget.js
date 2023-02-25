import { editWidget } from "./functionalities";

class Widget {
    constructor(widget_id="", device_id, user_id, type, index, position="", datastream=null) {
        this.widget_id=widget_id;
        this.device_id = device_id;
        this.user_id = user_id
        this.index = index;
        this.type = type;
        this.position = position;
        this.datastream = datastream;
    }
    getWidgetID() {
        return this.widget_id;
    }
    getDeviceID() {
        return this.device_id;
    }
    getUserID(){
        return this.user_id;
    }
    getIndex() {
        return this.index;
    }
    getType() {
        return this.type;
    }
    getPosition(){
        return this.position;
    }
    getDatastream(){
        return this.datastream;
    }
    setPosition(position) {
        this.name = position;
    }
    setDatastream(datastream){
        this.datastream = datastream;
        editWidget(this.getWidgetID(),this.getDeviceID(),this);
    }

}

export default Widget;
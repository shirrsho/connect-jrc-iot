import { editDevice, addNewWidget } from "./functionalities";

class Device {
    constructor(device_id = "", user_id, name = "Give a Name", chip = "ESP32", widgets=[]) {
        this.id = device_id;
        this.user_id = user_id
        this.name = name;
        this.chip = chip;
        this.widgets = widgets;
    }
    getDeviceID() {
        return this.id;
    }
    getUserID(){
        return this.user_id;
    }
    getName() {
        return this.name;
    }
    getChip() {
        return this.chip;
    }
    getWidgets(){
        return this.widgets;
    }
    setUserID(){
        return this.user_id;
    }
    setName(name) {
        this.name = name;
    }
    setChip(chip) {
        this.chip = chip;
    }
    addWidget(type){
        console.log(this.widgets);
        addNewWidget(this.id, this.user_id, type, this.widgets.length)
        this.widgets=[...this.getWidgets(),type]
        // console.log(this)
        editDevice(this.id, this.user_id, this)
    }

    getCodeforHardware() {

    }

}

export default Device;
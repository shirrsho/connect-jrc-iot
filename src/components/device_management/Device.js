import { editDevice, addNewWidget, getAllWidgets } from "./functionalities";

class Device {
    constructor(device_id = "", user_id, name = "Give a Name", chip = "ESP32", n_widgets=0) {
        this.id = device_id;
        this.user_id = user_id
        this.name = name;
        this.chip = chip;
        this.n_widgets = n_widgets;
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
    getN_Widgets(){
        return this.n_widgets;
    }
    incN_Widgets(){
        this.n_widgets += 1;
    }
    decN_Widgets(){
        this.n_widgets -= 1;
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
        // console.log(this.widgets);
        addNewWidget(this.getDeviceID(), this.getUserID(), type, this.getN_Widgets())
        this.incN_Widgets()
        // this.widgets=[...this.getWidgets(),type]
        // console.log(this)
        editDevice(this.id, this.user_id, this)
    }
    async fetchWidgets(){
        let wids = await getAllWidgets(this.getDeviceID())
        this.n_widgets = wids.length
        return wids
    }
    getCodeforHardware() {

    }

}

export default Device;
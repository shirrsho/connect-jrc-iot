class Device {
    constructor(device_id = "", user_id, name = "Give a Name", chip = "ESP32") {
        this.id = device_id;
        this.user_id = user_id
        this.name = name;
        this.chip = chip;
    }
    getName() {
        return this.name;
    }
    getChip() {
        return this.chip;
    }
    setName(name) {
        this.name = name;
    }
    setChip(chip) {
        this.chip = chip;
    }

    getCodeforHardware() {

    }

}

export default Device;
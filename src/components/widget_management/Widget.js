
class Widget {
    constructor(device_id, user_id, type, index, position="") {
        this.device_id = device_id;
        this.user_id = user_id
        this.index = index;
        this.type = type;
        this.position = position;
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
    setPosition(position) {
        this.name = position;
    }

}

export default Widget;
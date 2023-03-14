import { readState, initRTDBpath, writeState } from "../database/real-time_database_firebase"
import { editSpecificWidget } from "../database/regular_database_firebase";

function updateRTDB(device_id, pin, datatype, state){
    // console.log(state);
    writeState(device_id, pin, datatype, state)
}

function receieveRTDB(device_id, pin, datatype, state, updateMessage ){
    // console.log(pin,state);
    initRTDBpath(device_id, pin, datatype, state)
    readState(device_id, pin, updateMessage)
}

function editWidget(widget_id, device_id, widget){
    editSpecificWidget(widget_id, device_id, widget);
}

export { updateRTDB, editWidget, receieveRTDB }
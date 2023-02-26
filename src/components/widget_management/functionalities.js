import { getDatastream, updateDatastream, updateWidget } from "../database/real-time_database_firebase"
import { editSpecificWidget } from "../database/regular_database_firebase";

function updateRTDB(device_id, index, pin, state){
    // console.log(state);
    updateDatastream(device_id, index, pin, state)
}

function receieveRTDB(device_id, index, pin, state, updateMessage ){
    // console.log(pin,state);
    updateRTDB(device_id, index, pin,state)
    getDatastream(device_id, index, updateMessage)
}

function editWidget(widget_id, device_id, widget){
    editSpecificWidget(widget_id, device_id, widget);
}

export { updateRTDB, editWidget, receieveRTDB }
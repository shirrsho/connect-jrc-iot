import { updateDatastream, updateWidget } from "../database/real-time_database_firebase"
import { editSpecificWidget } from "../database/regular_database_firebase";

function updateRTDB(device_id, index, pin, state){
    // console.log(state);
    updateDatastream(device_id, index, pin, state)
}

function editWidget(widget_id, device_id, widget){
    editSpecificWidget(widget_id, device_id, widget);
}

export { updateRTDB, editWidget }
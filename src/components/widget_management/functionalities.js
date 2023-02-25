import { updateDatastream } from "../database/real-time_database_firebase"
import { editSpecificWidget } from "../database/regular_database_firebase";

function updateRTDB(device_id, index, datastream){
    updateDatastream(device_id, index, datastream)
}

function editWidget(widget_id, device_id, widget){
    editSpecificWidget(widget_id, device_id, widget);
}

export { updateRTDB, editWidget }
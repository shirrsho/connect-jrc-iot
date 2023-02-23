import { updateDatastream } from "../database/real-time_database_firebase"

function updateRTDB(device_id, datastream){
    updateDatastream(device_id, datastream)
}

export { updateRTDB }
import { updateDatastream } from "../database/real-time_database_firebase"

function updateRTDB(device_id, index, datastream){
    updateDatastream(device_id, index, datastream)
}

export { updateRTDB }
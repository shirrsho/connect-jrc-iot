import { getDatabase, ref, set } from "firebase/database";
import { app } from "./database_firebase";


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function updateDatastream (device_id,datastream) {
    console.log("up");
    set(ref(db, device_id, datastream.type), {
        pin:datastream.pin,
        state:datastream.state
      });
}

export {updateDatastream}
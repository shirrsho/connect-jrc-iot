import { getDatabase, ref, set } from "firebase/database";
import { app } from "./database_firebase";


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function updateDatastream (device_id,index,pin,state) {
    
    set(ref(db, device_id +'/'+ index), {
        pin:pin,
        state:state
      });
}



export {updateDatastream}
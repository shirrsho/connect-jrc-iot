import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "./database_firebase";


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function updateDatastream (device_id,index,pin,state) {
    set(ref(db, device_id +'/'+ index), {
        pin:pin,
        state:state
      });
}

function getDatastream (device_id,index,updateMessage){
onValue(ref(db, device_id +'/'+ index), (snapshot) => {
  const data = snapshot.val();
  updateMessage(data.state);
});
}

export {updateDatastream, getDatastream}
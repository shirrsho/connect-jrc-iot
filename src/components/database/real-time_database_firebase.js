import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "./database_firebase";


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function initRTDBpath(device_id, pin, datatype, state){
  set(ref(db, device_id +'/input/'+ pin), {
      datatype:datatype,
      state:state
    });
}

function writeState (device_id,pin,datatype,state) {
    set(ref(db, device_id +'/output/'+ pin), {
        datatype:datatype,
        state:state
      });
}

function readState (device_id,pin,updateMessage){
onValue(ref(db, device_id +'/input/'+ pin), (snapshot) => {
  const data = snapshot.val();
  updateMessage(data.state);
});
}

export {initRTDBpath, writeState, readState}
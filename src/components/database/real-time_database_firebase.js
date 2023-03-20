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

function initDevicePins(device_id){
  for(let i = 1 ; i < 36 ; i++){
    set(ref(db, device_id +'/input/'+ i), {
        datatype:"unk",
        state:0
      });
    set(ref(db, device_id +'/output/'+ i), {
        datatype:"unk",
        state:0
      });
  }
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

export {initRTDBpath, writeState, readState, initDevicePins}
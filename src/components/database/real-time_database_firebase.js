import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { app } from "./database_firebase";


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function initRTDBpath(device_id, pin, datatype, state){
  set(ref(db, device_id +'/input/'+ pin), {
      datatype:datatype,
      state:state
    });
}

async function getDataOnce(device_id,pin){
  let snap = null;
  try{
    snap = await get(ref(db, device_id+'/input/'+pin))
  } catch(error) {
    console.error(error);
    return false;
  };
  // console.log(snap.val().datatype);
  return snap.val().state
  // snap.forEach(doc => {
  //   // Object obj = new Object(doc.id,doc.data())
  //   // devices.push([doc.id, doc.data()])
  //   console.log(doc.val().datatype)
  // })
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

export {initRTDBpath, writeState, readState, getDataOnce}
import { app } from "./database_firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  deleteField,
  doc
} from "firebase/firestore";

const db = getFirestore(app);

const createNewUser = async (uid, name, email) => {
  try {
    await addDoc(collection(db, "users"), {
      uid: uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("registered");
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
};

const createNewDevice = async (device) => {
  try {
    // path: must be collection, document, collection, document ...
    await addDoc(collection(db, "devices", device.user_id, "owns"), {
      user_id : device.getUserID(),
      name : device.getName(),
      chip : device.getChip(),
      widgets : device.getWidgets(),
    });
    console.log("device added");
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
}

const editSpecificDevice = async (device_id,user_id) => {

}
const deleteSpecificDevice = async (device_id,user_id) => {
  try {
    // path: must be collection, document, collection, document ...
    await updateDoc(doc(db, "devices", user_id, "owns",device_id), {
      user_id: deleteField(),
      name: deleteField(),
      chip: deleteField(),
    });
    console.log("fields deleted");
    await deleteDoc(doc(db, "devices", user_id, "owns",device_id));
    console.log("device deleted");
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
}

// returns a 2d array of devices' id and information
async function getDevices(user_id) {
  // let q = query(collection(db, "devices"), where("user_id", "==", user_id));
  let devices = [];
  try {
    // console.log(user_id);
    let docSnaps = await getDocs(collection(db, "devices", user_id, "owns"));
    // console.log("get: "+devices);
    docSnaps.forEach(doc => {
      // Object obj = new Object(doc.id,doc.data())
      devices.push([doc.id, doc.data()])
      // console.log(doc.id)
    })
    // console.log(devices);
  } catch (err) {
    alert(err.message)
  }
  return devices
}

export {
  createNewUser,
  createNewDevice,
  getDevices,
  editSpecificDevice,
  deleteSpecificDevice
}
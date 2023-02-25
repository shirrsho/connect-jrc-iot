import { app } from "./database_firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getCollection,
  getDoc,
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
      n_widgets : device.getN_Widgets()
    });
    console.log("device added");
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
}

const editSpecificDevice = async (device_id,user_id,device) => {
  try {
    // path: must be collection, document, collection, document ...
    await updateDoc(doc(db, "devices", user_id, "owns",device_id), {
      name : device.getName(),
      chip : device.getChip(),
      n_widgets : device.getN_Widgets()
    });
    console.log("fields updated");
  } catch (err) {
    // console.error(err);
    alert(err.message);
    return false;
  }
  return true;
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

async function getDevice(user_id, device_id) {
  // let q = query(collection(db, "devices"), where("user_id", "==", user_id));
  let device = null;
  try {
    // console.log(user_id);
    device = await getDoc(doc(db, "devices", user_id, "owns", device_id));
    // console.log(device);
    // console.log("get: "+devices);
    // docSnaps.forEach(doc => {
      // Object obj = new Object(doc.id,doc.data())
      // device.push([docSnap.id, doc.data()])
      // console.log(doc.id)
    // })
    // console.log(devices);
  } catch (err) {
    alert("In getdevice in database:"+err.message)
  }
  return device.data()
}

const createNewWidget = async (widget) => {
  try {
    // path: must be collection, document, collection, document ...
    await addDoc(collection(db, "widgets", widget.getDeviceID(), "owns"), {
      user_id : widget.getUserID(),
      device_id : widget.getDeviceID(),
      index : widget.getIndex(),
      type : widget.getType(),
      position : widget.getPosition(),
      datastream : widget.getDatastream()
    });
    console.log("widget added");
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
}

// returns a 2d array of devices' id and information
async function getWidgets(device_id) {
  let widgets = [];
  try {
    // console.log(user_id);
    let docSnaps = await getDocs(collection(db, "widgets", device_id, "owns"));
    // console.log("get: "+devices);
    docSnaps.forEach(doc => {
      // Object obj = new Object(doc.id,doc.data())
      widgets.push([doc.id, doc.data()])
      // console.log(doc.id)
    })
    // console.log(devices);
  } catch (err) {
    alert(err.message)
  }
  return widgets
}

const editSpecificWidget = async (widget_id, device_id, widget) => {
  try {
    // path: must be collection, document, collection, document ...
    await updateDoc(doc(db, "widgets", device_id, "owns",widget_id), {
      position : widget.getPosition(),
      datastream : widget.getDatastream()
    });
    console.log("widget updated");
  } catch (err) {
    // console.error(err);
    alert(err.message);
    return false;
  }
  return true;
}

export {
  createNewUser,
  createNewDevice,
  createNewWidget,
  getDevice,
  getDevices,
  getWidgets,
  editSpecificDevice,
  editSpecificWidget,
  deleteSpecificDevice
}
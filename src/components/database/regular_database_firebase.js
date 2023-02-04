import { app } from "./database_firebase";
import {
    query,
    where,
    getFirestore,
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs
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
      await addDoc(collection(db, "devices",device.user.uid,"owns"), {
        name:device.name,
        authProvider: "local",
        chip:device.chip,
      });
      console.log("device added");
    } catch (err) {
      console.error(err);
      alert(err.message);
      return false;
    }
    return true;
}

async function getDevices(user_id){
    let q = query(collection(db, "devices"), where("user_id", "==", user_id));
    let devices = null;
    try{
        console.log("get: "+devices);
        devices = await getDoc(doc(db,"devices",user_id));
        console.log("get: "+devices);
    } catch(err){
        alert(err.message)
    }
    return devices
}

export {
    createNewUser,
    createNewDevice,
    getDevices
}
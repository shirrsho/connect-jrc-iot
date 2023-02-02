import { app } from "./database_firebase";
import {
    query,
    where,
    getFirestore,
    collection,
    addDoc,
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
        await addDoc(collection(db, "devices"), {
          user_id: device.user.uid,
          name:device.name,
          authProvider: "local",
          chip:device.chip
        });
        console.log("registered");
      } catch (err) {
        console.error(err);
        alert(err.message);
        return false;
      }
      return true;
}

async function getDevices(uid){
    let q = query(collection(db, "devices"), where("user_id", "==", uid));
    let devices = null;
    try{
        console.log("get: "+devices);
        devices = await getDocs(q);
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
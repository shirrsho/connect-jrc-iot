import { app } from "./database_firebase";
import {
    getFirestore,
    collection,
    addDoc
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

export {createNewUser}
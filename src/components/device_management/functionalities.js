import { createNewDevice,getDevices } from "../database/regular_database_firebase";

// To add a new device to the database,
// A device object should be sent to the addNew method
async function addNewDevice(device){
    try{
        await createNewDevice(device)
    } catch(err){
        alert(err.message)
        return false;
    }
    return true;
}

async function getAllDevices(uid){
    let devices = await getDevices(uid)
    console.log(devices);
    
}

export {addNewDevice, getAllDevices}
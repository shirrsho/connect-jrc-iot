import { 
    createNewDevice,
    getDevices,
    editSpecificDevice,
    deleteSpecificDevice } from "../database/regular_database_firebase";

import Device from "./Device";

// To add a new device to the database,
// A device object should be sent to the addNew method
async function addNewDevice(user_id, device_name, chip_name) {
    let device = new Device("", user_id, device_name, chip_name)
    try {
        await createNewDevice(device)
    } catch (err) {
        alert(err.message)
        return null;
    }
    return device;
}

async function editDevice(device_id, user_id) {
    try {
        await editSpecificDevice(device_id, user_id)
    } catch (err) {
        alert(err.message)
        return false;
    }
    return true;
}

async function deleteDevice(device_id, user_id) {
    try {
        // console.log("in delete");
        await deleteSpecificDevice(device_id,user_id)
    } catch (err) {
        alert(err.message)
        return false;
    }
    return true;
}

async function getAllDevices(uid) {
    let devices = await getDevices(uid)
    // console.log(devices);
    let deviceobjs = []
    devices.forEach(device => { // device[0]=device_id, device[1]=stored info in database
        let dev = new Device(device[0], device[1].user_id, device[1].name, device[1].chip, device[1].widgets);
        deviceobjs.push(dev)
        // console.log(dev);
    });
    return deviceobjs
}

export { addNewDevice, editDevice, deleteDevice, getAllDevices }
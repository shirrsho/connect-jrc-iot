import { 
    createNewDevice,
    createNewWidget,
    getDevice,
    getDevices,
    editSpecificDevice,
    deleteSpecificDevice } from "../database/regular_database_firebase";

import Device from "./Device";
import Widget from '../widget_management/Widget'

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

async function editDevice(device_id, user_id, device) {
    try {
        await editSpecificDevice(device_id, user_id, device)
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

async function getAllDevices(user_id) {
    let devices = await getDevices(user_id)
    // console.log(devices);
    let deviceobjs = []
    devices.forEach(device => { // device[0]=device_id, device[1]=stored info in database
        let dev = new Device(device[0], device[1].user_id, device[1].name, device[1].chip, device[1].widgets);
        deviceobjs.push(dev)
        // console.log(dev);
    });
    return deviceobjs
}

async function getADevice(user_id,device_id) {
    let device = await getDevice(user_id,device_id)
    let dev = new Device(device_id, device.user_id, device.name, device.chip, device.widgets);
    // console.log(devices);
    // let deviceobj = []
    // devices.forEach(device => { // device[0]=device_id, device[1]=stored info in database
        
    //     deviceobjs.push(dev)
    //     // console.log(dev);
    // });
    return dev;
}


async function addNewWidget(device_id, user_id, type, index) {
    let widget = new Widget(device_id, user_id, type, index)
    try {
        await createNewWidget(widget)
    } catch (err) {
        alert(err.message)
        return null;
    }
    return widget;
}
// async function updateDevice(device_id,device){

// }

export { addNewDevice, addNewWidget, editDevice, deleteDevice, getAllDevices, getADevice }
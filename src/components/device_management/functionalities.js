import { 
    createNewDevice,
    createNewWidget,
    getDevice,
    getDevices,
    getWidgets,
    editSpecificDevice,
    deleteSpecificDevice, 
    deleteSpecificWidget} from "../database/regular_database_firebase";

import Device from "./Device";
import Widget from '../widget_management/Widget'
import Datastream from "../widget_management/Datastream";
import { initDevicePins } from "../database/real-time_database_firebase";

// To add a new device to the database,
// A device object should be sent to the addNew method
async function addNewDevice(user_id, device_name, chip_name) {
    let device = new Device("", user_id, device_name, chip_name)
    let device_id = "";
    try {
        device_id = await createNewDevice(device)
    } catch (err) {
        alert(err.message)
        return null;
    }
    return device_id;
}

function initPins(device_id) {
    console.log(device_id);
    try {
        initDevicePins(device_id);
    } catch (err) {
        alert(err.message)
        return false;
    }
    return true;
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
        let dev = new Device(device[0], device[1].user_id, device[1].name, device[1].chip, device[1].n_widgets);
        deviceobjs.push(dev)
        // console.log(dev);
    });
    return deviceobjs
}

async function getADevice(user_id,device_id) {
    let device = await getDevice(user_id,device_id)
    let dev = new Device(device_id, device.user_id, device.name, device.chip, device.n_widgets);
    // console.log(devices);
    // let deviceobj = []
    // devices.forEach(device => { // device[0]=device_id, device[1]=stored info in database
        
    //     deviceobjs.push(dev)
    //     // console.log(dev);
    // });
    return dev;
}

// widget_id="", device_id, user_id, type, index, position="", datastream=null
async function addNewWidget(device_id, user_id, type, index) {
    let widget = new Widget("",device_id, user_id, type, index, "",Datastream(type))
    try {
        await createNewWidget(widget)
    } catch (err) {
        alert(err.message)
        return null;
    }
    return widget;
}

async function getAllWidgets(device_id) {
    let widgets = await getWidgets(device_id)
    // console.log(widgets);
    let widgetobjs = []
    widgets.forEach(widget => { // widget[0]=widget_id, widget[1]=stored info in database
        let wid = new Widget(widget[0],widget[1].device_id,widget[1].user_id, widget[1].type,widget[1].index,widget[1].position,widget[1].datastream);
        widgetobjs.push(wid)
        // console.log(wid);
    });
    // console.log(widgetobjs);
    return widgetobjs
}

async function deleteWidget(widget_id,device_id) {
    try {
        // console.log("in delete");
        await deleteSpecificWidget(widget_id,device_id)
    } catch (err) {
        alert(err.message)
        return false;
    }
    return true;
}


// async function updateDevice(device_id,device){

// }

export { addNewDevice, addNewWidget, editDevice, deleteDevice, getAllDevices, getADevice, getAllWidgets, deleteWidget, initPins }
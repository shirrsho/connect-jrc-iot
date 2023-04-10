import { readState, writeState, getDataOnce, writeVpin } from "../database/real-time_database_firebase"
import { editSpecificWidget } from "../database/regular_database_firebase";

function updateRTDB(device_id, pin, datatype, state){
    // console.log(state);
    if(datatype=="int"||datatype=="float") writeVpin(device_id, pin, datatype, state)
    writeState(device_id, pin, datatype, state)
}

function receieveRTDB(device_id, pin, datatype, state, updateMessage ){
    // console.log(pin,state);
    // initRTDBpath(device_id, pin, datatype, state)
    if(datatype||state){}
    readState(device_id, pin, updateMessage)
}

async function getInitialMessage(device_id,pin,updateMessage){
    let msg = "";
    try{
        msg = await getDataOnce(device_id,pin);
    } catch(err){
        return false;
    }
    updateMessage(msg);
    return true;
}

function editWidget(widget_id, device_id, widget){
    editSpecificWidget(widget_id, device_id, widget);
}

export { updateRTDB, editWidget, receieveRTDB, getInitialMessage }
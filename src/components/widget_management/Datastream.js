import SwitchData from "./datastreams/SwitchData";
import RegulatorData from "./datastreams/RegulatorData";
import DisplayData from "./datastreams/DisplayData";
import MessageBoxData from "./datastreams/MessageBoxData";

export default function Datastream(type) {
    if (type === "switch") {
        return new SwitchData();
    } else if (type === "regulator") {
        return new RegulatorData();
    } else if (type === "display") {
        return new DisplayData();
    } else if (type === "messagebox") {
        return new MessageBoxData();
    }
}

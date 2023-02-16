import SwitchData from "./datastreams/SwitchData";
import RegulatorData from "./datastreams/RegulatorData";
import DisplayData from "./datastreams/DisplayData";
import MessageBoxData from "./datastreams/MessageBoxData";

export default function Datastream(type) {
    if (type === "switch") {
        return SwitchData;
    } else if (type === "regulator") {
        return RegulatorData;
    } else if (type === "display") {
        return DisplayData;
    } else if (type === "messagebox") {
        return MessageBoxData;
    }
}

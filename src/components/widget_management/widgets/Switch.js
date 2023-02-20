import React, { useEffect, useState } from "react";
import SetSwitchData from "../widget-forms/SetSwitchData";

const Switch = ({ datastream }) => {
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };
  // if(datastream==null) <SetSwitchData isOpen={isOpen} onClose={handleClose} datastream={datastream} />

  const handleToggle = (event) => {
    setIsOn(event.target.checked)
    // console.log(isOn);
  };
  useEffect(() => {
    if(!datastream) return
    if (isOn) datastream.state = 1
    else datastream.state = 0
    // console.log("D: "+datastream);
  }, [isOn])

  return (
    <>
    {!datastream && <SetSwitchData isOpen={isOpen} onClose={handleFormClose} datastream={datastream} />}
    <div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={isOn} onChange={handleToggle} value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Switch</span>
      {/* {isOn && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>} */}
    </label>
    </div>
    </>
  );
}

export default Switch;
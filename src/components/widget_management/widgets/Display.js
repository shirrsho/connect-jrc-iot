import React, { useState } from "react";
import SetDisplayData from "../widget-forms/SetDisplayData";

const Display = ({ datastream, setDatastream }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };
  // if(datastream==null) <SetSwitchData isOpen={isOpen} onClose={handleClose} datastream={datastream} />

    return (
      <div>
        {!datastream && <SetDisplayData isOpen={isOpen} onClose={handleFormClose} datastream={datastream} setDatastream={setDatastream} />}
        <div>Hi, I am a Display!</div>
        </div>
    );
  }

  export default Display;
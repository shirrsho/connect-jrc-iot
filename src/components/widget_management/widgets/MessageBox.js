import React, { useState } from "react";
import SetMessageBoxData from "../widget-forms/setMessageBoxData";

const MessageBox = ({ datastream }) => {
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
        {!datastream && <SetMessageBoxData isOpen={isOpen} onClose={handleFormClose} datastream={datastream} />}
        <div>Hi, I am a MessageBox!</div>
        </div>
    );
  }

  export default MessageBox;
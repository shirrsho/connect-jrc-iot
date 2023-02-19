import React, { useState } from "react";
import Datastream from "../Datastream";

export default function SetSwitchData({ isOpen, onClose, datastream }) {
    const [formData, setFormData] = useState(Datastream("switch"));
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      datastream = formData
      onClose(datastream);
    };
  
    // Conditional rendering to show/hide the modal form
    if (!isOpen) {
      return null;
    }
    // widget_type:"switch",
    // pin:-1,
    // pinMode:"output",
    // signal:"digital",
    // state:0
    return (
      <div className="modal">
        <div className="modal-content">
          <div>
            <input placeholder="PIN" type="text" name="pin" onChange={handleChange} />
            <input placeholder="Default State" type="text" name="state" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
  

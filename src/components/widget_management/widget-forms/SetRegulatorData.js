import React, { useState } from "react";
import Datastream from "../Datastream";

export default function SetRegulatorData({ isOpen, onClose, datastream, setDatastream }) {
    const [formData, setFormData] = useState(Datastream("regulator"));
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setDatastream(formData)
      onClose(datastream);
    };
  
    // Conditional rendering to show/hide the modal form
    if (!isOpen) {
      return null;
    }
    // widget_type:"regulator",
    // pin:-1,
    // pinMode:"output",
    // signal:"analog",
    // min:0.00,
    // max:0.00,
    // state:0.00
    return (
      <div className="modal">
        <div className="modal-content">
          <div>
            <input placeholder="PIN" type="text" name="pin" onChange={handleChange} />
            <input placeholder="Minimum Value" type="text" name="min" onChange={handleChange} />
            <input placeholder="Maximum Value" type="text" name="max" onChange={handleChange} />
            <input placeholder="Default State" type="text" name="state" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
  
  

  
  
  

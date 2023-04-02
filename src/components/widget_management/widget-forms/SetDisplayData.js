import React, { useState } from "react";
import Datastream from "../Datastream";

export default function SetDisplayData({ onClose, datastream, setDatastream }) {
  const [formData, setFormData] = useState(datastream);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setDatastream(formData);
    onClose();
  };
  const handleSkip = (e) => {
    e.preventDefault();
    // console.log(formData);
    setDatastream(datastream);
    onClose();
  };

  // widget_type:"switch",
  // pin:-1,
  // pinMode:"output",
  // signal:"digital",
  // state:0
  return (
    <div className="modal z-10 bg-white">
      <div className="h-[400px] w-[600px] rounded-2xl flex justify-center flex-col items-center py-10">
        <input
          placeholder="Virtual PIN"
          type="text"
          className="py-3 w-[70%] text-center border-b border-gray-400"
          name="pin"
          value={formData?.pin}
          onChange={handleChange}
        />
        <input
          placeholder="Default State"
          className="py-3 w-[70%] my-2 text-center border-b border-gray-400"
          type="text"
          name="state"
          value={formData?.state}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-3 w-[35%] rounded-lg text-white hover:scale-105 bg-blue-500 hover:text-lg hover:text-blue-500 hover:bg-white my-2 text-center border-2 border-gray-400"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="submit"
          className="py-3 w-[35%] rounded-lg text-white hover:scale-105 bg-gray-500 hover:text-lg hover:text-blue-500 hover:bg-white my-2 text-center border-2 border-gray-400"
          onClick={handleSkip}
        >
          Keep as it is
        </button>
      </div>
    </div>
  );
}

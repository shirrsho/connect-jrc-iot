import React, { useState } from "react";
import Datastream from "../Datastream";

export default function SetRegulatorData({ onClose, datastream }) {
  const [formData, setFormData] = useState(Datastream("switch"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    datastream = formData;
    onClose(datastream);
  };

  return (
    <div className="modal z-10 bg-white">
      <div className="h-[400px] w-[600px] rounded-2xl flex justify-center flex-col items-center py-10">
        <input
          placeholder="PIN"
          type="text"
          className="py-3 w-[70%] text-center border-b border-gray-400"
          name="pin"
          onChange={handleChange}
        />
        <input
          placeholder="Minimum Value"
          className="py-3 w-[70%] my-2 text-center border-b border-gray-400"
          type="text"
          name="state"
          onChange={handleChange}
        />
        <input
          placeholder="Maximum Value"
          type="text"
          className="py-3 w-[70%] text-center border-b border-gray-400"
          name="pin"
          onChange={handleChange}
        />
        <input
          placeholder="Default State"
          className="py-3 w-[70%] my-2 text-center border-b border-gray-400"
          type="text"
          name="state"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-3 w-[35%] rounded-lg text-white hover:scale-105 bg-blue-500 hover:text-lg hover:text-blue-500 hover:bg-white my-2 text-center border-2 border-gray-400"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

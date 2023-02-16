import { useState } from "react";

function Form({ onAddWidget, onCloseModal }) {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  function handleSave() {
    onAddWidget();
    onCloseModal();
  }

  function handleCancel() {
    setInputValues({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    });
    onCloseModal();
  }

  function handleInputChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center z-10  justify-center bg-gray-400 bg-opacity-20">
      <div className="bg-white p-8 rounded-lg">
        <div className="mt-4 p-16">
          <label htmlFor="input1" className="font-bold">
            Input 1:
          </label>
          <input
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            className="  mr-9 p-2 border-b placeholder-gray-600 border-gray-600 rounded-lg mt-4 text-center"
          />
          <label htmlFor="input2" className="font-bold">
            Input 2:
          </label>
          <input
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            className=" mr-9 p-2 border-b placeholder-gray-600 border-gray-600 rounded-lg mt-4 text-center"
          />
          <label htmlFor="input3" className="font-bold">
            Input 3:
          </label>
          <input
            name="input3"
            value={inputValues.input3}
            onChange={handleInputChange}
            className=" mr-9 p-2 border-b placeholder-gray-600 border-gray-600 rounded-lg mt-4 text-center"
          />
          <label htmlFor="input4" className="font-bold">
            Input 4:
          </label>
          <input
            name="input4"
            value={inputValues.input4}
            onChange={handleInputChange}
            className=" mr-9 p-2 border-b placeholder-gray-600 border-gray-600 rounded-lg mt-4 text-center"
          />
        </div>
        <div className="flex justify-end mt-8 py-5">
          <button
            className="bg-green-700 text-white p-3 rounded-lg mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-600 text-white p-3 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

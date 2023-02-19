import React, { useEffect, useState } from 'react'
import SetRegulatorData from '../widget-forms/SetRegulatorData';
import '../widget-styles/Regulator.css'

const Regulator = ({ datastream }) => {
    const [value, setValue] = useState(50);
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleFormClose = () => {
      setIsOpen(false);
    };
    // if(datastream==null) <SetSwitchData isOpen={isOpen} onClose={handleClose} datastream={datastream} />

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if(!datastream) return
        datastream.state = value
        console.log(datastream);
    }, [value])

    return (
        <div>
        {!datastream && <SetRegulatorData isOpen={isOpen} onClose={handleFormClose} datastream={datastream} />}
        <div className="regulator">
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="regulator-input"
                id="regulator"
            />
            <label className="regulator-value">{value}%</label>
        </div>
        </div>
    );
}

export default Regulator;
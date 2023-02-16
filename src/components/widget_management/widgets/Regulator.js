import React, { useEffect, useState } from 'react'
import '../widget-styles/Regulator.css'

const Regulator = ({ datastream }) => {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(()=>{
        datastream.state=value
        console.log(datastream);
    },[value])

    return (
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
    );
}

export default Regulator;
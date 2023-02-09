import Reacr, { useState } from 'react'
import '../styles/Regulator.css'

const Regulator = () => {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

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
import React, { useState } from "react";
import '../styles/Switch.css'

const Switch = () => {
    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className="toggle-switch-input"
          id="toggle-switch"
        />
        <label className="toggle-switch-label" htmlFor="toggle-switch">
          <span className={`toggle-switch-inner ${isOn ? "on" : "off"}`} />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }

  export default Switch;
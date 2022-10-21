import React, { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const handleIncrease = () => {
    const newTemp = temp + 1;
    if (temp < 30) {
      setTemp(newTemp);
    }
    if (newTemp > 14) {
      setTempColor("hot");
    }
  };

  const handleDecrease = () => {
    const newTemp = temp - 1;
    if (temp > 0) {
      setTemp(newTemp);
    }
    if (newTemp < 15) {
      setTempColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        {/* {temp > 14 && <div className="temperature-display hot">{temp}°C</div>} */}
        {/* {temp < 15 && <div className="temperature-display cold">{temp}°C</div>} */}
        <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
      </div>
      <div className="button-container">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
};

export default App;

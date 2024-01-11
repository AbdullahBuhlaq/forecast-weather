import { useState } from "react";
import MeatureSide from "./MeatureSide";
import WeatherSide from "./WeatherSide";

function WeatherContent() {
  const [unit, setUnit] = useState("metric");

  function changeUnitsHandler(event) {
    setUnit(event.target.alt);
  }

  return (
    <div className="weather-content row">
      <WeatherSide unit={unit} />
      <MeatureSide
        unit={unit}
        setUnit={setUnit}
        onChecked={changeUnitsHandler}
      />
    </div>
  );
}

export default WeatherContent;

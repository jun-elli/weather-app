import "../App.css";
import icons from "../icons/icons.js";
import { useState, useEffect } from "react";

function Today({ weather }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    findIcon(weather.weather[0].icon);
  }, [weather]);

  const findIcon = (weatherIcon) => {
    let result = icons.find((el) => el.includes(weatherIcon));
    setIcon(result);
  };

  return (
    <div className="container d-flex flex-column mt-4 pt-2 mb-2 align-items-center justify-content-center">
      <img className="icon-m card-img-top" src={icon} />
      <div className="card card-m text-center border-info mt-5">
        <h2 className="card-header bg-info text-white">{weather.name}</h2>
        <div className="card-body">
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Today;

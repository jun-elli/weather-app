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
      <h2 className="bg-dark text-white h3-minw p-2 rounded">{weather.name}</h2>
      <img className="icon-m card-img-top" src={icon} />
      <h3>{weather.main.temp} ºC</h3>
      {/* <div className="card card-m text-center mt-3">
        <div className="card-body">
          <p className="text-wrap text-capitalize fs-5 fw-light">
            {weather.weather[0].description}
          </p>
        </div>
      </div> */}
      <div
        className="d-flex mt-3 justify-content-evenly btn-group"
        role="group"
        aria-label="More weather information"
      >
        <button
          className="btn btn-info m-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-expanded="true"
          aria-controls="main"
        >
          Main
        </button>
        <button
          className="btn btn-info m-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#temperatures"
          aria-expanded="false"
          aria-controls="temperatures"
        >
          Temperatures
        </button>
        <button
          className="btn btn-info m-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Rain
        </button>
      </div>
      <div className="collapse show card-minw m-1" id="main">
        <div className="card card-body">{weather.weather[0].description}</div>
      </div>
      <div className="collapse card-minw m-1" id="temperatures">
        <div className="card card-body">
          {weather.main.temp_min} ºC || {weather.main.temp_max} ºC
        </div>
      </div>
    </div>
  );
}

export default Today;

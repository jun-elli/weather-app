import "../App.css";
import { useState } from "react";

function Today({ weather }) {
  return (
    <div className="card card-m text-center border-info mt-3">
      <h2 className="card-header bg-info text-white">{weather.name}</h2>
      <img
        className="icon-m card-img-top"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <div className="card-body">
        <p>{weather.weather[0].description}</p>
      </div>
    </div>
  );
}

export default Today;

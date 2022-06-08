import "./App.css";
import key from "./APIkey.js";
import SideNav from "./components/SideNav";
import Search from "./components/Search";
import Today from "./components/Today";
import FiveDays from "./components/FiveDays";
import { useState, useEffect } from "react";

function App() {
  const [isToday, setIsToday] = useState(true);
  const [location, setLocation] = useState("Barcelona");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [nextWeather, setNextWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    getCurrentWeather();
    getNexttWeather();
  }, [location]);

  let getCurrentWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${key}`
    );
    if (response.status !== 200) {
      throw new Error("cannot fetch data");
    }
    let data = await response.json();
    setCurrentWeather(data);
  };

  let getNexttWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${key}`
    );
    if (response.status !== 200) {
      throw new Error("cannot fetch data");
    }
    let data = await response.json();
    setNextWeather(data);
  };

  return (
    <div className="bg-light text-center">
      <SideNav isToday={isToday} setIsToday={setIsToday} />
      <Search setLocation={setLocation} />
      <div className="container">
        {isToday && currentWeather && <Today weather={currentWeather} />}
        {!isToday && nextWeather && <FiveDays weather5={nextWeather} />}
      </div>
    </div>
  );
}

export default App;

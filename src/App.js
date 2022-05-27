import "./App.css";
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

  useEffect(() => {
    getCurrentWeather();
    getNexttWeather();
  }, [location]);

  //For a local run, type here your own Open Weather API key
  const APIkey = "";

  let getCurrentWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`
    );
    if (response.status !== 200) {
      throw new Error("cannot fetch data");
    }
    let data = await response.json();
    setCurrentWeather(data);
  };

  let getNexttWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIkey}`
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
        {isToday ? (
          <Today weather={currentWeather} />
        ) : (
          <FiveDays weather5={nextWeather} />
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import fetchWeather from "../lib/utils/fetchWeather";
import WeatherContext from "./WeatherContext";
import apiWrapper from "../lib/utils/apiWrapper";

// 선택할 국가
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

console.log(WEATHER_API_KEY);

const WeatherProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("Korea");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const data = await apiWrapper(
      () => fetchWeather(selectedCountry, WEATHER_API_KEY),
      "getWeather"
    );
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, [selectedCountry]);

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, selectedCountry, setSelectedCountry }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

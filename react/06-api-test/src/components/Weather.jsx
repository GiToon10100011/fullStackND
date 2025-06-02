import React, { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import countries from "../constants/countries.constant";

const Weather = () => {
  const { weather, selectedCountry, setSelectedCountry } =
    useContext(WeatherContext);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div>
      <select value={selectedCountry} onChange={handleChange}>
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div>
        <h1>{weather.name}</h1>
        <p>{weather.main.temp}°C</p>
        <p>{weather.weather[0].description}</p>
      </div>
    </div>
  );
};

export default Weather;

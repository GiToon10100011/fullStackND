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
        <h1>{countries[selectedCountry]}</h1>
        <p>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt="weather icon"
            width={100}
            height={100}
          />
        </p>
        <p>
          온도: <strong>{weather?.main.temp}°C</strong>
        </p>
        <p>
          날씨: <strong>{weather?.weather[0].description}</strong>
        </p>
        <p>
          풍속: <strong>{weather?.wind.speed}m/s</strong>
        </p>
      </div>
    </div>
  );
};

export default Weather;

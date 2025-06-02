import axios from "axios";
import countries from "../../constants/countries.constant";

const fetchWeather = async (selectedCountry, key) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: countries[selectedCountry],
        appid: key,
        units: "metric",
        lang: "kr",
      },
    }
  );
  return response.data;
};

export default fetchWeather;

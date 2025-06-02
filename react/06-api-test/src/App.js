import FetchApi from "./components/FetchApi";
import FetchWithAxios from "./components/FetchWithAxios";
import "./App.css";
import WeatherProvider from "./contexts/WeatherProvider";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <FetchApi />
      <FetchWithAxios />
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;

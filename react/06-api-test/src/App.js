import FetchApi from "./components/FetchApi";
import FetchWithAxios from "./components/FetchWithAxios";
import "./App.css";
import WeatherProvider from "./contexts/WeatherProvider";
import Weather from "./components/Weather";
import Movie from "./components/Movie";
import FakeStore from "./components/FakeStore";
import CounterState from "./components/CounterState";
import CounterProvider from "./contexts/CounterContext";
import CounterZustand from "./components/CounterZustand";
import RecoilState from "./components/RecoilState";

function App() {
  return (
    <div className="App">
      <FetchApi />
      <FetchWithAxios />
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
      <hr />
      <Movie />
      <hr />
      <FakeStore />
      <hr />
      <h1>Counter</h1>
      <h2>useState + useContext</h2>
      <CounterProvider>
        <CounterState />
      </CounterProvider>
      <hr />
      <h1>Zustand</h1>
      <CounterZustand />
      <hr />
      <h1>Recoil</h1>
      <RecoilState />
      <hr />
      <h1>React Query</h1>
      <hr />
      <h1>Redux</h1>
      <hr />
    </div>
  );
}

export default App;

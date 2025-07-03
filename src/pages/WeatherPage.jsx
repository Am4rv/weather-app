import { useState } from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import FiveDayForecast from "../components/FiveDayForecast/FiveDayForecast";
import SearchBar from "../components/SearchBar/SearchBar";
import Loader from "../components/Loader/Loader";
import { getWeatherByCity, getFiveDayForecast } from "../service/weatherService";
import "./WeatherPage.css";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (city.trim() === "") {
      setError("Por favor ingresa una ciudad");
      setWeather(null);
      setForecast([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const weatherData = await getWeatherByCity(city);
      setWeather(weatherData);

      const forecastData = await getFiveDayForecast(city);
      setForecast(forecastData);
    } catch (err) {
      setWeather(null);
      setForecast([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-page">
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <FiveDayForecast forecast={forecast} />}
    </div>
  );
}

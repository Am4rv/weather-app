import { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { getWeatherByCity } from "../service/weatherService";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (city.trim() === "") {
      setError("Por favor ingresa una ciudad");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Ingresa una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar clima</button>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
// Este componente maneja la lógica de búsqueda de clima por ciudad
// y muestra el resultado utilizando el componente WeatherCard.
// También maneja el estado de carga y errores, proporcionando una experiencia de usuario fluida.

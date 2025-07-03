import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>🌡️ Temp: {weather.main.temp}°C</p>
      <p>🌥️ Clima: {weather.weather[0].description}</p>
      <p>💧 Humedad: {weather.main.humidity}%</p>
      <p>🌬️ Viento: {weather.wind.speed} m/s</p>
      <p>📈 Presión: {weather.main.pressure} hPa</p>
      <p className="description">Clima: {weather.weather[0].description}</p>
    </div>
  );
}

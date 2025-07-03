import "./FiveDayForecast.css";

export default function FiveDayForecast({ forecast }) {
  return (
    <div className="forecast-container">
      <h3>Pronóstico para los próximos 5 días</h3>
      <div className="forecast-cards">
        {forecast.map((day) => {
          const date = new Date(day.dt_txt);
          const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

          return (
            <div key={day.dt} className="forecast-card">
              <p>{date.toLocaleDateString()}</p>
              <img src={iconUrl} alt={day.weather[0].description} />
              <p>{day.main.temp}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeatherByCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=es`
  );

  if (!response.ok) {
    throw new Error("Ciudad no encontrada");
  }

  return response.json();
}

export async function getFiveDayForecast(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=es`
  );

  if (!response.ok) {
    throw new Error("Error al obtener el pronóstico de 5 días");
  }

  const data = await response.json();

  // Filtrar solo datos a las 12:00:00 (aproximadamente al mediodía de cada día)
  const dailyForecast = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return dailyForecast;
}
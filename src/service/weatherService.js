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

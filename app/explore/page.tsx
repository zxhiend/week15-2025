interface WeatherData {
  temperature: number;
  windspeed: number;
}

async function getWeather(): Promise<WeatherData | null> {
  const latitude = -7.2575;
  const longitude = 112.7521;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return {
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
    };
  } catch (e) {
    return null;
  }
}

export default async function ExplorePage() {
  const weather = await getWeather();
  return (
    <div>
      <h1>info cuaca saat ini</h1>
      {weather ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">surabaya</h5>
            <p className="card-text">suhu: {weather.temperature}°c</p>
            <p className="card-text">kecepatan angin: {weather.windspeed} km/jam</p>
          </div>
        </div>
      ) : (
        <p>tidak dapat mengambil data cuaca sekarang.</p>
      )}
    </div>
  );
}
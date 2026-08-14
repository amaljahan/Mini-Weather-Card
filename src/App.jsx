import { useEffect, useState } from "react";

import "./App.css"

function getWeatherCondition(code) {
  if (code === 0) return "Clear sky";

  else if (code === 1) return "Mainly clear";
  else if (code === 2) return "Partly cloudy";
  else if (code === 3) return "Overcast";

  else if (code === 45) return "Fog";
  else if (code === 48) return "Depositing rime fog";

  else if (code === 51) return "Light drizzle";
  else if (code === 53) return "Moderate drizzle";
  else if (code === 55) return "Dense drizzle";

  else if (code === 56) return "Light freezing drizzle";
  else if (code === 57) return "Dense freezing drizzle";

  else if (code === 61) return "Slight rain";
  else if (code === 63) return "Moderate rain";
  else if (code === 65) return "Heavy rain";

  else if (code === 66) return "Light freezing rain";
  else if (code === 67) return "Heavy freezing rain";

  else if (code === 71) return "Slight snowfall";
  else if (code === 73) return "Moderate snowfall";
  else if (code === 75) return "Heavy snowfall";

  else if (code === 77) return "Snow grains";

  else if (code === 80) return "Slight rain showers";
  else if (code === 81) return "Moderate rain showers";
  else if (code === 82) return "Violent rain showers";

  else if (code === 85) return "Slight snow showers";
  else if (code === 86) return "Heavy snow showers";

  else if (code === 95) return "Thunderstorm: Slight or moderate";

  else if (code === 96) return "Thunderstorm with slight hail";
  else if (code === 99) return "Thunderstorm with heavy hail";

  else return "Unknown";
}



function App(){
    const city = "Al Ain";
    const [weather,setWeather] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://api.open-meteo.com/v1/forecast?latitude=24.22164&longitude=55.79631&current=temperature_2m,weather_code")//longitude and latitude weather details of Kozhikkode.
        .then((response)=>{
           if(!response.ok){
            throw new Error("Failed to fetch weather data.");
           }
           return response.json()
        })
        // .then((data)=>console.log(data))
        .then((data)=>{
            setWeather(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        })
    },[]);
    return (
        <div className="app">
            <h1>Weather App</h1>
            {loading && <p>Loading Weather...</p>}
            {error && <p>{error}</p>}

        {weather && (
            <div className="weather-card">
                <h2>{city}</h2>
                <h3>{weather.current.temperature_2m}°C</h3>
                <p>{getWeatherCondition(weather.current.weather_code)}</p>
                
            </div>
      
                     
        )}
        </div>
    );
}


export default App;
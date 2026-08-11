import { useEffect, useState } from "react";

function getWeatherCondition(code) {
  if (code === 0) return "Clear sky";

  else if (code === 1) return "Mainly clear";
  else if (code === 2) return "Partly cloudy";
  else if (code === 3) return "Overcast";

  else if (code >= 45 && code <= 48) return "Fog";

  else if (code === 51) return "Light drizzle";
  else if (code === 53) return "Moderate drizzle";
  else if (code === 55) return "Dense drizzle";

  else if (code === 56 || code === 57) return "Freezing drizzle";

  else if (code === 61) return "Slight rain";
  else if (code === 63) return "Moderate rain";
  else if (code === 65) return "Heavy rain";

  else if (code === 66 || code === 67) return "Freezing rain";

  else if (code === 71) return "Slight snowfall";
  else if (code === 73) return "Moderate snowfall";
  else if (code === 75) return "Heavy snowfall";

  else if (code === 77) return "Snow grains";

  else if (code === 80) return "Slight rain showers";
  else if (code === 81) return "Moderate rain showers";
  else if (code === 82) return "Violent rain showers";

  else if (code === 85) return "Slight snow showers";
  else if (code === 86) return "Heavy snow showers";

  else if (code === 95) return "Thunderstorm";

  else if (code === 96 || code === 99) {
    return "Thunderstorm with hail";
  }

  else return "Unknown";
}



function App(){
    const city = "Kozhikkode";
    const [weather,setWeather] = useState(null);
    useEffect(()=>{
        fetch("https://api.open-meteo.com/v1/forecast?latitude=11.2588&longitude=75.7804&current=temperature_2m,weather_code")//longitude and latitude weather details of Kozhikkode.
        .then((response)=>response.json())
        // .then((data)=>console.log(data))
        .then((data)=>setWeather(data));
    },[]);
    return (
        <div className="app">
            <h1>Weather App</h1>

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
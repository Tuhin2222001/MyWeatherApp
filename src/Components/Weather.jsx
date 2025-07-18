// Importing necessary hooks and CSS - 01
import React, {  useState, useRef, useEffect} from "react";
import "./Weather.css";
// Importing all weather icons -02
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
function Weather() {
// State to store weather data after fetching
  const [weatherData, setWeatherData] = useState(false);
// State to store error messages (e.g., city not found)
  const [errorMsg, setErrorMsg] = useState("");
// State to show loading indicator while fetching
  const [loading, setLoading] = useState(false);
// Mapping OpenWeatherMap icon codes to local image files
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };
// Ref to directly access the input field value (city name)
  const inputRef = useRef();
// Function to fetch weather data from API based on city
  const search = async (city) => {
    const trimmedCity = city.trim();
// If input is empty, show error and stop
    if (trimmedCity === "") {
      setErrorMsg("Please enter a city name");
      setWeatherData(false);
      return;
    }
// Show loading while API is being called
    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
// Hide loading once data is fetched
      setLoading(false);

      if (!response.ok) {
        setErrorMsg(data.message || "City not found");
        setWeatherData(false);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
      setErrorMsg(""); 
    } catch {
      setWeatherData(false);
      setErrorMsg("Something went wrong. Please try again.");
      setLoading(false);
    }
  };
 // Fetching weather data for a default city like Kolkata
  useEffect(() => {
    search("Kolkata");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(inputRef.current.value);
            }
          }}
        />

        <img
          src={search_icon}
          alt=""
          className="src"
          onClick={() => search(inputRef.current.value)}
        />
        {errorMsg && <p className="error">{errorMsg}</p>}
        {loading && <p className="loading">Loading weather data...</p>}
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Weather;

import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      console.log(`Requesting weather data for city: ${location}`); // Debugging log
      const response = await axios.get(`/weather?city=${location}`);
      console.log(response.data); // Log the response data for debugging
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Weather Search</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="border p-2 mr-2"
      />
      <button onClick={fetchWeather} className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default Weather;

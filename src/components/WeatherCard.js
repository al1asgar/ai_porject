import React from "react";

const WeatherCard = ({ data }) => {
  if (!data) return null; // Ensure data exists before rendering

  const { name, main, weather } = data;
  const { temp } = main;
  const { description } = weather[0];

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{description}</p>
      <p>Temperature: {temp}°C</p>
    </div>
  );
};

export default WeatherCard;

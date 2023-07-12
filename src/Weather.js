
import React, { useState } from "react";
import "./App.css";
import axios from "axios";




export default function Weather() {
  let [city, setCity] = useState(null);
  let [info, setInfo] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "caf1f1c8b723edf56ea35c0626f88b06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // console.log(apiUrl);
    axios.get(apiUrl).then(function showTemperature(response) {
      // console.log(response.data);

      setInfo(
        <ul>
          <li key="temperature">Temperature: {Math.round(response.data.main.temp)}°C </li>
          <li key="description">Description: {response.data.weather[0].description} </li>
          <li key="humidity">Humidity: {response.data.main.humidity} %</li>
          <li key="wind">Wind: {response.data.wind.speed} m/s</li>
          <li key="icon">
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </li>
        </ul>
      );
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a City"
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <h3>{info}</h3>
    </div>
  );
}

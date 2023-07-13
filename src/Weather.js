
import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
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
        <div className="row">
          <div className="col-9"><input
          type="search"
          placeholder="Enter a City"
          className="form-control"
          onChange={updateCity}
        ></input></div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul className="day-description">
        <li>Wednesday 12:00</li>
        <li>partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          icon 
          <span className="temperature">6</span>
          <span className="celcius">°C</span>
          <span className="fahreinheit">|F</span>
        </div>
        <div className="col-6 weather-info">
          <ul>
            <li>
              Precipitation: 15 %
            </li>
            <li>
              Humidity: 15 %
            </li>
            <li>
              Wind: 15 mph
            </li>
          </ul>
        </div>
      </div>
      
      <h3>{info}</h3>
    </div>
  );
}

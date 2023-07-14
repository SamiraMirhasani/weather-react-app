
import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";




export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function showTemperature(response) {
    setReady(true);
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    })
    
  }

  // function updateCity(event) {
  //   setCity(event.target.value);
  // }
  
if (ready){
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9"><input
          type="search"
          placeholder="Enter a City"
          className="form-control"
        
        ></input></div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul className="day-description">
        <li> <FormattedDate date={weatherData.date}/></li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather Icon"
            />
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="celcius">°C</span>
          <span className="fahreinheit">|F</span>
        </div>
        <div className="col-6 weather-info">
          <ul>
            <li>
              Humidity: {weatherData.humidity} %
            </li>
            <li>
              Wind: {weatherData.wind} mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}else{
  
    let apiKey = "caf1f1c8b723edf56ea35c0626f88b06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    // console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
    return "Loading ..."
} 
}

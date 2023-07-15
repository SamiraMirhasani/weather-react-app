
import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";




export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity)

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

function search(){
  let apiKey = "caf1f1c8b723edf56ea35c0626f88b06";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}  
 

function handleSubmit(event){
  event.preventDefault();
  search();
}

function updateCity(event){
   setCity(event.target.value);
   }

if (ready){
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
          <input type="submit" value="Search" className="btn btn-primary" ></input>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
    </div>
  );
}else{
  search();
  return "Loading ..."
} 
}

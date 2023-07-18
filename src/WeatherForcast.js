import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
   console.log(response.data)
  }

  let apiKey = "caf1f1c8b723edf56ea35c0626f88b06";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForcast">
      <div className="row">
        <div className="col">
          <div className="weatherForcast-day">Thu</div>
          <WeatherIcon code="10d" size={32} />
          <div className="weatherForcast-temperatures">
            <span className="weatherForcast-temperatures-max">19°</span>
            <span className="weatherForcast-temperatures-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

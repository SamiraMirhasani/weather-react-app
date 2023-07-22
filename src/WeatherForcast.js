import React, { useState } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);

  }


  if (loaded){
    console.log(forcast);
    return (
    <div className="weatherForcast">
        <div className="row">
          {forcast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastDay data={dailyForecast} />
                </div>
              );
            }
            return null; // Added a return statement for non-matching indexes
          })}
        </div>
      </div>
    );

  }else{
  let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  
  return null;
  }

  


}

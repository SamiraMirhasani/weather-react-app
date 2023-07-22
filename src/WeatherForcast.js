import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  
  useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);


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
            }else{
              return null;
            }
            
          })}
        </div>
      </div>
    );

  }else{
  let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  
  return null;
  }

  


}

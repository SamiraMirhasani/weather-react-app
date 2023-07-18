import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
            <h1>{props.data.city}</h1>
      <ul className="day-description">
        <li> <FormattedDate date={props.data.date}/></li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={40}/>
          <WeatherTemperature celcius={props.data.temperature}/>
        </div>
        <div className="col-6 weather-info">
          <ul>
            <li>
              Humidity: {props.data.humidity} %
            </li>
            <li>
              Wind: {props.data.wind} mph
            </li>
          </ul>
        </div>
      </div>
        </div>
    );
}
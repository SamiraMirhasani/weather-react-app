import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img
              src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt="Weather Icon"
            />
        <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="celcius">°C</span>
          <span className="fahreinheit">|F</span>
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
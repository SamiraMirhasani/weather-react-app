import React from "react";
//import { AnimatedWeatherIcon } from 'animated-weather-icon';

export default function WeatherIcon(props){
    return (
        <img
              src={`https://openweathermap.org/img/wn/${props.code}@2x.png`}
              alt="Weather Icon"
            />
        )

}
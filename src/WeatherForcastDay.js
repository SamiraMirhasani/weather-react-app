import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";

export default function WeatherForcastDay(props){

    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
        
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function day(){
        let date = new Date(props.data.dt *1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }


    return (
        <div>
            <div className="weatherprops.data-day">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={32} />
          <div className="weatherprops.data-temperatures">
            <span className="weatherprops.data-temperatures-max">{maxTemperature()}°</span>
            <span className="weatherprops.data-temperatures-min">{minTemperature()}°</span>
          </div>
        </div>
    )
}
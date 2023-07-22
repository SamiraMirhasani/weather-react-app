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
            <div className="weatherForcast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={32} />
            <div className="weatherForcast-temperatures">
                <span className="weatherForcast-temperatures-max">{maxTemperature()}°</span>
                <span className="weatherForcast-temperatures-min">{minTemperature()}°</span>
                </div>
        </div>
    );
}
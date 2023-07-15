import React,{useState} from "react";


export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celcius");

    function showFahrenheit (event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }

    if (unit === "celcius"){
        return (
        <span className="weatherTemperature"><span className="temperature">{Math.round(props.celcius)}</span>
          <span className="celcius">°C</span>
          <span className="fahreinheit">|<a href="/" onClick={showFahrenheit}>F</a></span>
        </span>
    )  
    }else{
        let fahrenheit = (props.celcius * 9) / 5 + 32
        return (
            <span className="weatherTemperature"><span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="celcius"><a href="/" onClick={showCelcius}>°C</a> </span>
            <span className="fahreinheit">| F </span>
            </span>
    ) 
    }
  
}
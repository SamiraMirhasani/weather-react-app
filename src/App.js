
import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className='container'> 
      <div className="App">
        <h1>Weather App</h1>
         <Weather defaultCity="Paris"/>
         <footer>
          <a href="https://github.com/SamiraMirhasani/weather-react-app" target="_blank" rel="noreferrer">Open source code </a>
          by Samira Mirhasani
         </footer>
      </div>
    </div>
  );
}

export default App;

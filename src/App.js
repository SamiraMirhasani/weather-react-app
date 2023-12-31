
import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className='container'> 
      <div className="App">
         <Weather defaultCity="New York"/>
      </div>
      <footer>
          <a href="https://github.com/SamiraMirhasani/weather-react-app" target="_blank" rel="noreferrer">Open source code </a>
          by Samira Mirhasani
         </footer>
    </div>
  );
}

export default App;

import React, { useState }from 'react';
import './App.css';
import './index.css';
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import Dates from './components/Dates';
import Weather from './components/Weather';

const api = {
  key: '61b4403b5a0e0bb697b66f53ab78211c',
  base: 'https://api.openweathermap.org/data/2.5/'
}



function App() {

  let query = '';
  let climate = 'default';
  const [weather, setWeather] = useState({});

  const search = (updatedQuery) => {
    query = updatedQuery;
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => setWeather(result))
  }

  if(weather.main) {
    
    let weatherTemp = Math.round(weather.main.temp);
    console.log(weatherTemp)
    if(weatherTemp < -5) {
      climate += ' very-cold';
    } else if (weatherTemp >= -5 && weatherTemp < 15) {
      climate += ' cold';
     } else if(weatherTemp >= 15 && weatherTemp < 30) {
      climate += ' warm';
    } else {
      climate += ' very-warm';
    }
    
}
  return (
    <div className={climate}>
      <SearchBar 
        inputType="text" 
        buttonType="submit" 
        value={query}
        onSearch={search} 
      />
      {typeof weather.main != 'undefined' ? (
        <div>
          <Location>{weather.name}, {weather.sys.country}</Location>
          <Dates>{new Date().toDateString()}</Dates>
          <Weather temp={`${Math.round(weather.main.temp)}°C`} climate={weather.weather[0].main}></Weather>
        </div>
      ): ('')}
    </div>
  );
}

export default App;

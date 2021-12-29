import React, {useState, useEffect} from 'react';
import './CurrentWeather.css';
import getWeatherData from './components/WeatherAPI';
import raindrops from './raindrops.png'
import new_down_arrow from './new_down_arrow.png'
import new_up_arrow from './new_up_arrow.png'


function CurrentWeather() {

  const [weatherdata, setWeatherData] = useState(null);
  
  const [city, setCity] = useState('23927');

  const getData = async () => {
    try{
      const data = await getWeatherData(city);
      setWeatherData(data);
    }catch(error) {
      console.log(error.message); 
    }
  }

  
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main-container">
      <div className="location">
        <h2 className='bold-heading'>Weather in</h2>
        <h3>{weatherdata.location.name}, {weatherdata.location.region}</h3>
        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Enter your City"/>
          <button type="button" onClick={() => getData()}>Search</button>
      </div>
      <div className="condition">
        <h2 className='bold-heading'>Currently</h2>
        <h3 className="condition">{weatherdata.current.condition.text}</h3>
        <img className="icon" src={weatherdata.current.condition.icon} alt="weather icon"/>
        <h2>{weatherdata.current.temp_f}&deg;F</h2>
      </div>
      <div className='feels-like'>
        <h2 className='bold-heading'>Feels like (RealFeel)</h2>
        <h2>{weatherdata.current.feelslike_f}&deg;F</h2>
        <h4>Humidity: {weatherdata.current.humidity}%</h4>
        <h4>Windspeed: {weatherdata.current.wind_mph}mph</h4>
        <h4>Direction: {weatherdata.current.wind_dir}</h4>
      </div>
      <div className="low">
        <h2 className='bold-heading'>Daily Low</h2>
        <h2>{weatherdata.forecast.forecastday[0].day.mintemp_f}&deg;F</h2>
        <img src={new_down_arrow} alt='arrow-down' width='50' height='75'></img>
      </div>
      <div className='high'>
        <h2 className='bold-heading'>Daily High</h2>
        <h2>{weatherdata.forecast.forecastday[0].day.maxtemp_f}&deg;F</h2>
        <img src={new_up_arrow} alt='arrow-up' width='50' height='75'></img>
      </div>
      <div className='rain'>
        <h2 className='bold-heading'>Chance of rain</h2>
        
        <h2>{weatherdata.forecast.forecastday[0].day.daily_chance_of_rain}%</h2>
        <img src={raindrops} alt='raindrops' width='50' height='75'></img>
        <h4>Total precipitation: {weatherdata.forecast.forecastday[0].day.totalprecip_in} in.</h4>
      </div>
    </div>
  );
}

export default CurrentWeather;

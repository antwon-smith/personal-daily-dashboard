import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1/forecast.json?';
const apiKey = process.env.REACT_APP_API_KEY;

const getWeatherData = async (cityname) => {
  try {
    const {data} = await axios.get(baseUrl + `key=${apiKey}&q=${cityname}}&days=4&aqi=no&alerts=no`);
    return data
  } catch(error) {
    throw error;
  }
}

export default getWeatherData;
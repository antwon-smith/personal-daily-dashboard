import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CurrentWeather from './CurrentWeather';
import Calendar from './Calendar';
import News from './News'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <CurrentWeather />
    <News />
    <Calendar />
  </React.StrictMode>,
  document.getElementById('root')
);


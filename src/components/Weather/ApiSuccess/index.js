import React from 'react';

const ApiSuccess = ({ API, weatherAPI, units }) => {
  console.log('api----', API);
  const temp = API.main.temp.toFixed(1);
  const temp_feel = API.main.feels_like.toFixed(1);
  const windInKmByHour = Math.trunc(API.wind.speed * 3.6);
  const weatherCode = API.weather.[0].id;
  const weatherIcon = `http://openweathermap.org/img/wn/${API.weather.[0].icon}@2x.png`;

  return (
    <div>
      <div className="container-cityName">{API.name} {API.sys.country}</div>
      <img src={weatherIcon} alt="icon_weather" />
      <div className="container-cityName">Température: {temp} °C</div>
      <div className="container-cityName">Température ressentie: {temp_feel} °C</div>
      <div className="container-cityClouds">Couverture nuageuse: {API.weather.[0].description}, {API.clouds.all} %</div>
      <div className="container-cityClouds">Humidité: {API.main.humidity} %</div>
      <div className="container-cityWind">Vent: {windInKmByHour} Km/h</div>
      <div className="container-cityVisibility">Visibilité: {API.visibility} m</div>
    </div>
  );
};

export default ApiSuccess;

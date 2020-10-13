import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { selectUnit, addFollowed, removeFollowed } from '../../../store/actions';

import '../../../styles/ApiSuccess.scss';

const ApiSuccess = ({ API, units, selectUnit, followed, addFollowed, removeFollowed }) => {
  const temp = API.main.temp.toFixed(1);
  const tempFeel = API.main.feels_like.toFixed(1);
  const windInKmByHour = Math.trunc(API.wind.speed * 3.6);
  // const weatherIcon = `http://openweathermap.org/img/wn/04d@2x.png`;
  const weatherIcon = `http://openweathermap.org/img/wn/${API.weather.[0].icon}@2x.png`;
  const metricUnit = '°C';
  const imperialInit = '°F';

  return (
    <div className="apiSuccess-container">
      <div className="apiSuccess-container-button">
        <Button type="button" primary onClick={(evt) => selectUnit(evt.target.value)} value="metric">°C</Button>
        <Button type="button" secondary onClick={(evt) => selectUnit(evt.target.value)} value="imperial">°F</Button>
        <div className="container-city_name">{API.name} ({API.sys.country})
        </div>
      </div>
      <img src={weatherIcon} alt="icon_weather" />
      <div className="container-temp">Température: {temp} °C</div>
      <div className="container-temp_feel">Température ressentie: {tempFeel} {units}</div>
      <div className="container-city_cloud">Couverture nuageuse: {API.weather.[0].description}, {API.clouds.all} %</div>
      <div className="container-city_humidity">Humidité: {API.main.humidity} %</div>
      <div className="container-city_wind">Vent: {windInKmByHour} Km/h</div>
      <div className="container-city_visibility">Visibilité: {API.visibility} m</div>
      {!followed &&
        (<div className="container-heart" onClick={addFollowed}><AiOutlineHeart /></div>)}
      {followed &&
        (<div className="container-heart" onClick={removeFollowed}><AiFillHeart /></div>)}
    </div>
  );
};

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  API: state.user.API,
  loading: state.user.loading,
  apiSuccess: state.user.apiSuccess,
  followed: state.user.followed,
});

const mapDispatch = (dispatch) => ({
  selectUnit: (units) => {
    dispatch(selectUnit(units));
  },

  addFollowed: () => {
    dispatch(addFollowed());
  },

  removeFollowed: () => {
    dispatch(removeFollowed());
  },
});

export default connect(mapState, mapDispatch)(ApiSuccess);

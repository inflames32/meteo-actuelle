import React from "react";
import { connect } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/Fi";
import {
  selectUnit,
  addFollowed,
  removeFollowed,
  deleteCityOnClick,
} from "../../../store/actions";

import "../../../styles/ApiSuccess.scss";

const ApiUseEffect = ({
  followed,
  addFollowed,
  removeFollowed,
  deleteCityOnClick,
  APISuccessUseEffect,
}) => {
  const temp = APISuccessUseEffect.main.temp.toFixed(1);
  const tempFeel = APISuccessUseEffect.main.feels_like.toFixed(1);
  const windInKmByHour = Math.trunc(APISuccessUseEffect.wind.speed * 3.6);
  const weatherIcon = `http://openweathermap.org/img/wn/${APISuccessUseEffect.weather[0].icon}@2x.png`;
  const flag = `https://www.countryflags.io/${APISuccessUseEffect.sys.country}/flat/64.png`;
  const handleBtnTrash = () => {
    console.log("je supprime cette ville");
    deleteCityOnClick();
  };
  return (
    <div className="apiSuccess-container">
      <div className="apiSuccess-container-button">
        <div className="container-city_name">
          {APISuccessUseEffect.name} {APISuccessUseEffect.sys.country}
          <div>
            <img src={flag} alt="country flag" />
          </div>
        </div>
      </div>
      <div className="container-temp">
        <div className="container-temp-icon">
          <img src={weatherIcon} alt="icon_weather" />
        </div>
        <div className="container-temp-symbol">|</div>
        <div className="container-temp-temp">
          {temp}
          <span>°C</span>
        </div>
      </div>
      <div className="container-temp_feel">
        Température ressentie: {tempFeel} °C
      </div>
      <div className="container-city_cloud">
        Couverture nuageuse: {APISuccessUseEffect.weather[0].description},{" "}
        {APISuccessUseEffect.clouds.all} %
      </div>
      <div className="container-city_humidity">
        Humidité: {APISuccessUseEffect.main.humidity} %
      </div>
      <div className="container-city_wind">Vent: {windInKmByHour} Km/h</div>
      <div className="container-city_visibility">
        Visibilité: {APISuccessUseEffect.visibility} m
      </div>
      <div className="container-follow">
        {!followed && (
          <div className="container-heart" onClick={addFollowed}>
            <AiOutlineHeart />
          </div>
        )}
        {followed && (
          <div className="container-heart" onClick={removeFollowed}>
            <AiFillHeart />
          </div>
        )}
        <div className="container-trash" onClick={handleBtnTrash}>
          <FiTrash2 />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
  units: state.user.units,
  loading: state.user.loading,
  followed: state.user.followed,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(ApiUseEffect);

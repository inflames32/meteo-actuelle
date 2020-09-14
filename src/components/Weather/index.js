import React from 'react';
import ApiSuccess from '../../containers/ApiSuccess';
import './styles.scss';

const Weather = ({ data, API, apiSuccess }) => {
  // console.log(temperature);
  // state
  console.log(data);
  // state.API
  console.log(API);
  // renvoi api
  console.log(apiSuccess);

  return (

    <div className="container-weather">
      <div className="container-title">
        {/* {
            temperature.map((element) => (
              <div className="container-cityName">{element.temp}</div>
            ))
          } */}
        <h3>date</h3>
        {apiSuccess && (
          <ApiSuccess />
        )}
      </div>
      <div className="body">
        <div className="body-temp">temp</div>
        {/* faire une boucle  */}
        <div className="body-temp">TEMP</div>
      </div>
    </div>
  );
};

export default Weather;

import React from 'react';
import PropTypes from 'prop-types';
import ApiSuccess from '../../containers/ApiSuccess';
import './styles.scss';

const Weather = ({ API, apiSuccess }) => {
  // state.API
  console.log(API);
  // renvoi api
  console.log(apiSuccess);

  return (

    <div className="container-weather">
      <div className="container-title">
        <h3>date</h3>
        {apiSuccess && (
          <ApiSuccess />
        )}
      </div>
    </div>
  );
};

Weather.propTypes = {
  apiSuccess: PropTypes.bool.isRequired,
  API: PropTypes.object.isRequired,
};

export default Weather;

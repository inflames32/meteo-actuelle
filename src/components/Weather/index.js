import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import ApiSuccess from './ApiSuccess';

import '../../styles/weather.scss';

const Weather = ({ API, apiSuccess }) => {
  // state.API
  //console.log(API);
  // renvoi api
  //console.log(apiSuccess);
  const locale = moment.locale('fr');
  //console.log(locale);
  // const date = moment().format('LL');
  // const time = moment().format('LT');
  const date = moment().locale('fr').format('dddd, Do MMMM YYYY');
  const time = moment().locale('fr').format('h:mm:ss');
  return (

    <div className="container-weather">
      <div className="container-title">
        <span>Aujourd'hui nous sommes le {date}</span>
        <span> et il est {time}</span>
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

const mapState = (state) => ({
  city: state.user.city,
  units: state.user.units,
  API: state.user.API,
  loading: state.user.loading,
  apiSuccess: state.user.apiSuccess,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Weather);

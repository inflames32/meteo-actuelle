import axios from 'axios';

import {
  SUBMIT,
  submitError,
  submitSuccess,
  SUBMIT_CITY_IN_FRANCE,
} from '../actions';

const submitCity = (store) => (next) => (action) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const cityName = store.getState().user.city;
  const unity = store.getState().user.units;
  const language = store.getState().user.lang;
  next(action);
  switch (action.type) {
    // submit in world
    case SUBMIT: {
      // console.log('je submit en dans le monde');
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unity}&appid=${API_KEY}&lang=${language}`,
      }).then((res) => {
        // console.log('---resultat---', res, res.data);
        // console.log(res.config.url);
        store.dispatch(submitSuccess(res.data));
      }).catch((err) => {
        store.dispatch(submitError(err));
      });
      break;
    }
    // submit in France
    case SUBMIT_CITY_IN_FRANCE: {
      // console.log('je submit en france');
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName},fr&units=${unity}&appid=${API_KEY}&lang=${language}`,
      }).then((res) => {
        // console.log('---resultat---', res, res.data);
        // console.log(res.config.url);
        store.dispatch(submitSuccess(res.data));
      }).catch((err) => {
        store.dispatch(submitError(err));
      });
      break;
    }
    default:
  }
};

export default submitCity;

import React from 'react';
import axios from 'axios';

import {
  SUBMIT,
  submitError,
  submitSuccess,
  ON_FORM_LOGIN,
  onFormLoginError,
  onFormLoginSuccess,
} from '../actions';

const logMiddleware = (store) => (next) => (action) => {
  // console.log(store.getState());

  next(action);
  switch (action.type) {
    case ON_FORM_LOGIN: {
      const devUrl = 'localhost:3000';
      const data = store.getState().user.loginData;
      axios({
        method: 'post',
        url: `http://${devUrl}/login`,
        data,
      }).then((res) => {
        if (res.data === 'cant find user with this id') {
          store.dispatch(onFormLoginError("E-mail and password doesn't matchs"));
        }
        else {
          store.dispatch(onFormLoginSuccess(res.data.info.id, res.data.info.email));
        }
      }).catch((err) => {
        store.dispatch(onFormLoginError(err));
      });
      break;
    }

    case SUBMIT: {
      const API_KEY = process.env.REACT_APP_API_KEY;
      // console.log(API_KEY);
      // const API_KEY = '183deee9a13cf0287c807a50c35417d1';
      const cityName = store.getState().user.city;
      const unity = store.getState().user.units;
      const language = store.getState().user.lang;
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unity}&appid=${API_KEY}&lang=${language}`,
      }).then((res) => {
        console.log(res);
        console.log('data ----', res.data);
        store.dispatch(submitSuccess(res.data));
      }).catch((err) => {
        store.dispatch(submitError(err));
      });
      break;
    }
    default:
  }
};

export default logMiddleware;
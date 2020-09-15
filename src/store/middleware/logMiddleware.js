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
  console.log('Je laisse passer cette action: ', action);
  next(action);
  switch (action.type) {
    case ON_FORM_LOGIN: {
      const devUrl = 'localhost:3000';
      const data = store.getState().user.loginData;
      console.log(data);
      axios({
        method: 'post',
        url: `http://${devUrl}/login`,
        data,
      }).then((res) => {
        console.log(res.data);
        if (res.data === 'cant find user with this id') {
          store.dispatch(onFormLoginError("E-mail and password doesn't matchs"));
        }
        else {
          console.log(res.data);
          store.dispatch(onFormLoginSuccess(res.data.info.id, res.data.info.email));
        }
      }).catch((err) => {
        console.log(err);
        store.dispatch(onFormLoginError(err));
      });
      break;
    }

    case SUBMIT: {
      const apiKey = '183deee9a13cf0287c807a50c35417d1';
      const cityName = store.getState().user.city;
      const unity = store.getState().user.units;
      const language = store.getState().user.lang;
      console.log(unity);
      console.log(language);
      console.log(cityName);
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unity}&appid=${apiKey}&lang=${language}`,
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        store.dispatch(submitSuccess(res.data));
      }).catch((err) => {
        console.log(err);
        store.dispatch(submitError(err));
      });
      break;
    }
    default:
  }
};

export default logMiddleware;

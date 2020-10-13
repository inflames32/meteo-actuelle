import axios from 'axios';

import {
  ON_FORM_LOGIN,
  onFormLoginError,
  onFormLoginSuccess,
  submitCreateAccountFormError,
  submitCreateAccountFormSuccess,
  SUBMITCREATEACCOUNTFORM,
  LOGOUT,
  logoutSuccess,
  logoutError,
} from '../actions';

const logMiddleware = (store) => (next) => (action) => {
  // console.log(store.getState());

  next(action);
  switch (action.type) {
    case SUBMITCREATEACCOUNTFORM: {
      //const url = 'http://localhost:3000'; // dev url
      const url = 'https://whatsweathertoday.herokuapp.com';

      axios({
        method: 'post',
        url: `${url}/signup`,
        data: store.getState().user.createAccount,
        withCredentials: true,
      }).then((res) => {
        console.log(res.data, 'compte crée avec succès');
        store.dispatch(submitCreateAccountFormSuccess(res.data));
      }).catch((error) => {
        console.log(error, 'une erreur c\'est produite');
        store.dispatch(submitCreateAccountFormError(error));
      });
      break;
    }

    case ON_FORM_LOGIN: {
      // const url = 'http://localhost:3000';
      const url = 'https://whatsweathertoday.herokuapp.com';
      const data = store.getState().user.loginData;
      axios({
        method: 'post',
        url: `${url}/login`,
        data,
        withCredentials: true,
      }).then((res) => {
        if (res.data === 'cant find user with this id') {
          store.dispatch(onFormLoginError("E-mail and password doesn't matchs"));
        }
        else {
          store.dispatch(onFormLoginSuccess(res.data.info.id, res.data.info.email, 'vous êtes connecté'));
        }
      }).catch((err) => {
        store.dispatch(onFormLoginError(err, 'utilisateur inconnu'));
      });
      break;
    }

    case LOGOUT: {
      // const url = 'http://:localhost:3000';
      const url = 'https://whatsweathertoday.herokuapp.com';
      axios({
        method: 'post',
        url: `${url}/logout`,
      }).then((res) => {
        console.log(res.data);
        store.dispatch(logoutSuccess());
      })
        .catch((err) => {
          console.error(err);
        });
      break;
    }
    default:
  }
};

export default logMiddleware;

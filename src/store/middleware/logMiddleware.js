import axios from 'axios';

import {
  ON_FORM_LOGIN,
  onFormLoginError,
  onFormLoginSuccess,
  submitCreateAccountForm,
  submitCreateAccountFormError,
  submitCreateAccountFormSuccess,
  SUBMITCREATEACCOUNTFORM,
} from '../actions';

const logMiddleware = (store) => (next) => (action) => {
  // console.log(store.getState());

  next(action);
  switch (action.type) {
    case SUBMITCREATEACCOUNTFORM: {
      const devUrl = 'localhost:3000';
      axios({
        method: 'post',
        url: `http://${devUrl}/signup`,
        data: store.getState().user.createAccount,
      }).then((res) => {
        console.log(res.data);
        store.dispatch(submitCreateAccountFormSuccess());
      }).catch((error) => {
        console.log(error);
        store.dispatch(submitCreateAccountFormError(error));
      });
      break;
    }

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
          store.dispatch(onFormLoginSuccess(res.data.info.id, res.data.info.email, 'vous êtes connecté'));
        }
      }).catch((err) => {
        store.dispatch(onFormLoginError(err, 'utilisateur inconnu'));
      });
      break;
    }
    default:
  }
};

export default logMiddleware;

import axios from 'axios';

import {
  SUBMIT_BUTTON, submitError, submitSuccess,
} from '../actions';

const logMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log('Je laisse passer cette action: ', action);
  next(action);
  switch (action.type) {
    case SUBMIT_BUTTON: {
      const apiKey = '183deee9a13cf0287c807a50c35417d1';
      axios({
        method: 'post',
        url: `api.openweathermap.org/data/2.5/weather?q=${data} & appid=${apiKey}`,
        data: store.getState().user.city,
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        // store.dispatch(submitSuccess(res.data));
      }).catch((err) => {
        console.log(err);
        // store.dispatch(submitError(err));
      });
      break;
    }
    default:
  }
};

export default logMiddleware;

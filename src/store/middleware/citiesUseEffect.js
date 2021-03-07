import axios from "axios";

import {
  SUBMIT,
  submitError,
  submitSuccess,
  SUBMIT_CITY_IN_FRANCE,
  API_USE_EFFECT,
  APIUseEffectSuccess,
  APIUseEffectError,
} from "../actions";

const APIUseEffect = (store) => (next) => (action) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const city = store.getState().user.citiesByDefault;
  const country = store.getState().user.citiesByDefault.choose;
  const { units } = store.getState().user;
  const { lang } = store.getState().user;
  next(action);
  switch (action.type) {
    case API_USE_EFFECT: {
      axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&,fr&${units}=${units}&appid=${API_KEY}&lang=${lang}`,
      })
        .then((res) => {
          console.log(res.data, "reponse ici");
          store.dispatch(APIUseEffectSuccess(res.data));
        })
        .catch((e) => {
          console.error(e);
          store.dispatch(APIUseEffectError("useEffectError"));
        });
      break;
    }
    default:
  }
};
export default APIUseEffect;

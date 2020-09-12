import { INPUT_CITY_CHANGE, SUBMIT_BUTTON } from '../actions';

const initialState = {
  loading: false,
  city: '',
  cityZipCode: '',
  temp: '',
  unity: '°C',
  weather: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };

    case SUBMIT_BUTTON:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

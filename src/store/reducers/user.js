import { INPUT_CITY } from '../actions';

const initialState = {
  loading: false,
  city: '',
  temp: '',
  unity: '°C',
  weather: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CITY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

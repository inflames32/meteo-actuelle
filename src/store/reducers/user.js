import {
  INPUT_CITY_CHANGE,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
} from '../actions';

const initialState = {
  loading: false,
  city: '',
  cityZipCode: '',
  temp: '',
  unity: '°C',
  weather: '',
  messageSuccess: '',
  messageError: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };

    case SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        messageSuccess: 'bravo!',
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        messageError: 'unknow city',
      };

    default:
      return state;
  }
};

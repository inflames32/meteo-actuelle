export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INPUT_CITY_CHANGE = 'INPUT_CITY_CHANGE';
export const SUBMIT_BUTTON = 'SUBMIT_BUTTON';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';

export const inputCityChange = (payload) => ({
  type: INPUT_CITY_CHANGE,
  payload,
});

export const submitButton = () => ({
  type: SUBMIT_BUTTON,
});

export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS,
});

export const submitError = () => ({
  type: SUBMIT_ERROR,
});

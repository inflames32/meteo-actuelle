export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INPUT_CITY = 'INPUT_TEXT';

export const inputCity = (payload) => ({
  type: INPUT_CITY,
  payload,
});

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

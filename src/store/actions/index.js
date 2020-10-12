export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INPUT_CITY_CHANGE = 'INPUT_CITY_CHANGE';
export const SUBMIT = 'SUBMIT';
export const OPEN_BURGER_MENU = 'OPEN_BURGER_MENU';

// = Login
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const ON_FORM_LOGIN = 'ON_FORM_LOGIN';
export const ON_FORM_LOGIN_ERROR = 'ON_FORM_LOGIN_ERROR';
export const ON_FORM_LOGIN_SUCCESS = 'ON_FORM_LOGIN_SUCCESS';

export const SELECT_UNIT = 'SELECT_UNIT';

// = followed
export const ADDFOLLOWED = 'ADDFOLLOWED';
export const REMOVEFOLLOWED = 'REMOVEFOLLOWED';

// = createAccount
export const ONCREATEACCOUNTINPUTCHANGE = 'ONCREATEACCOUNTINPUTCHANGE';
export const SUBMITCREATEACCOUNTFORM = 'SUBMITCREATEACCOUNTFORM';
export const SUBMITCREATEACCOUNTFORMSUCCESS = 'SUBMITCREATEACCOUNTFORMSUCCESS';
export const SUBMITCREATEACCOUNTFORMERROR = 'SUBMITCREATEACCOUNTFORMERROR';

// = openBurgerMenu
export const openBurgerMenu = () => ({
  type: OPEN_BURGER_MENU,
});

export const onCreateAccountInputChange = (payload) => ({
  type: ONCREATEACCOUNTINPUTCHANGE,
  payload,
});

export const submitCreateAccountForm = () => ({
  type: SUBMITCREATEACCOUNTFORM,
});

export const submitCreateAccountFormSuccess = (payload) => ({
  type: SUBMITCREATEACCOUNTFORMSUCCESS,
  payload,

});
export const submitCreateAccountFormError = (payload) => ({
  type: SUBMITCREATEACCOUNTFORMERROR,
  payload,
});

export const addFollowed = (payload) => ({
  type: ADDFOLLOWED,
  payload,
});

export const removeFollowed = (payload) => ({
  type: REMOVEFOLLOWED,
  payload,
})

export const selectUnit = (payload) => ({
  type: SELECT_UNIT,
  payload,
});

export const inputCityChange = (payload) => ({
  type: INPUT_CITY_CHANGE,
  payload,
});

export const submit = () => ({
  type: SUBMIT,
});

export const onInputChange = (payload) => ({
  type: ON_INPUT_CHANGE,
  payload,
});
export const submitSuccess = (payload) => ({
  type: SUBMIT_SUCCESS,
  payload,
});

export const submitError = () => ({
  type: SUBMIT_ERROR,
});

export const onFormLogin = () => ({
  type: ON_FORM_LOGIN,
});
export const onFormLoginSuccess = (payload) => ({
  type: ON_FORM_LOGIN_SUCCESS,
  payload,
});
export const onFormLoginError = () => ({
  type: ON_FORM_LOGIN_ERROR,
});

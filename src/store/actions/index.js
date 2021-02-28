export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const INPUT_CITY_CHANGE = "INPUT_CITY_CHANGE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

// = Login
export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_ERROR = "SUBMIT_ERROR";
export const ON_FORM_LOGIN = "ON_FORM_LOGIN";
export const ON_FORM_LOGIN_ERROR = "ON_FORM_LOGIN_ERROR";
export const ON_FORM_LOGIN_SUCCESS = "ON_FORM_LOGIN_SUCCESS";

export const SELECT_UNIT = "SELECT_UNIT";

// = followed
export const ADDFOLLOWED = "ADDFOLLOWED";
export const REMOVEFOLLOWED = "REMOVEFOLLOWED";
export const DELETE_CITY_ON_CLICK = "DELETE_CITY_ON_CLICK";

// = createAccount
export const ONCREATEACCOUNTINPUTCHANGE = "ONCREATEACCOUNTINPUTCHANGE";
export const SUBMITCREATEACCOUNTFORM = "SUBMITCREATEACCOUNTFORM";
export const SUBMITCREATEACCOUNTFORMSUCCESS = "SUBMITCREATEACCOUNTFORMSUCCESS";
export const SUBMITCREATEACCOUNTFORMERROR = "SUBMITCREATEACCOUNTFORMERROR";

// = menu
export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

// = choix du pays
export const CHOOSE_COUNTRY = "CHOOSE_COUNTRY";
// = Submit en France
export const SUBMIT_CITY_IN_FRANCE = "SUBMIT_CITY_IN_FRANCE";
// =Submit dans le monde
export const SUBMIT = "SUBMIT";

export const chooseCountry = (payload) => ({
  type: CHOOSE_COUNTRY,
  payload,
});

export const submitCityInFrance = () => ({
  type: SUBMIT_CITY_IN_FRANCE,
});

export const submit = () => ({
  type: SUBMIT,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});
export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const logout = () => ({
  type: LOGOUT,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = () => ({
  type: LOGOUT_ERROR,
});

// = openBurgerMenu
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
});

export const deleteCityOnClick = () => ({
  type: DELETE_CITY_ON_CLICK,
});

export const selectUnit = (payload) => ({
  type: SELECT_UNIT,
  payload,
});

export const inputCityChange = (payload) => ({
  type: INPUT_CITY_CHANGE,
  payload,
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

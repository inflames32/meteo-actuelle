import {
  INPUT_CITY_CHANGE,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  ON_FORM_LOGIN_ERROR,
  ON_FORM_LOGIN_SUCCESS,
  ON_INPUT_CHANGE,
  SELECT_UNIT,
  ADDFOLLOWED,
  REMOVEFOLLOWED,
  ONCREATEACCOUNTINPUTCHANGE,
  SUBMITCREATEACCOUNTFORM,
  SUBMITCREATEACCOUNTFORMSUCCESS,
  SUBMITCREATEACCOUNTFORMERROR,
} from '../actions';

const initialState = {
  createAccount: {
    email: '',
    password: '',
    passwordConfirm: ''
  },
  followed: false,
  userId: '',
  isLogged: '',
  loadingLoginSubmit: false,
  loading: false,
  city: '',
  cityZipCode: '',
  units: 'metric',
  API: {},
  messageSuccess: '',
  messageError: '',
  lang: 'fr',
  apiSuccess: false,

  loginData: {
    email: '',
    password: '',
  },
  weatherAPI: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ONCREATEACCOUNTINPUTCHANGE:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          ...action.payload,
        },
      };

    case SUBMITCREATEACCOUNTFORM:
      return {
        ...state,
        loading: true,
      };

    case SUBMITCREATEACCOUNTFORMSUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SUBMITCREATEACCOUNTFORMERROR:
      return {
        ...state,
        loading: false,
      };

    case ADDFOLLOWED:
      return {
        ...state,
        followed: true,
      };

    case REMOVEFOLLOWED:
      return {
        ...state,
        followed: !state.followed,
      };
    case SELECT_UNIT:
      return {
        ...state,
        units: action.payload,
      };

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
        messageSuccess: 'congratulations!',
        // API = res.data
        API: { ...action.payload },
        apiSuccess: true,
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        messageError: 'unknow city',
        apiSuccess: false,
        API: {},
      };

    case ON_INPUT_CHANGE:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...action.payload,
        },
        isLogged: false,
      };

    case ON_FORM_LOGIN_ERROR:
      return {
        ...state,
        loadingLoginSubmit: false,
        userId: '',
        isLogged: false,
      };
    case ON_FORM_LOGIN_SUCCESS:
      return {
        ...state,
        loadingLoginSubmit: false,
        isLogged: true,
        userId: state.userId,
      };

    default:
      return state;
  }
};

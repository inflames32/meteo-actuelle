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
  ON_FORM_LOGIN,
  OPEN_BURGER_MENU,
} from '../actions';

const initialState = {
  menuBurgerIsOpen: true,
  createAccount: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
  id: '',
  followed: false,
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
  message: '',
  loginData: {
    email: '',
    password: '',
    id: '',
  },
  weatherAPI: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_BURGER_MENU:
      return {
        ...state,
        menuBurgerIsOpen: !state.openBurgerMenu,
      };

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
        message: 'ton compte a été crée! ',
      };

    case SUBMITCREATEACCOUNTFORMERROR:
      return {
        ...state,
        loading: false,
        message: 'impossible de créer ton compte!',
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

    case ON_FORM_LOGIN:
      return {
        ...state,
        loadingLoginSubmit: true,
      };

    case ON_FORM_LOGIN_ERROR:
      return {
        ...state,
        loadingLoginSubmit: false,
        userId: '',
        isLogged: false,
        message: 'erreur de connexion à votre compte',
      };

    case ON_FORM_LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload,
        loadingLoginSubmit: false,
        isLogged: true,
        loginData: {
          ...state.loginData,
          id: action.payload,
        },
        message: 'vous êtes connecté',
      };

    default:
      return state;
  }
};

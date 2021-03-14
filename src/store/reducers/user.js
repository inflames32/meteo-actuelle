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
  OPEN_MENU,
  CLOSE_MENU,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CHOOSE_COUNTRY,
  SUBMIT_IN_FRANCE,
  DELETE_CITY_ON_CLICK,
  API_USE_EFFECT_SUCCESS,
  API_USE_EFFECT_ERROR,
} from "../actions";

const initialState = {
  citiesByDefault: "Helsinki" /* {
    city: "Paris",
    choose: "&,fr",
  }, */,
  /*    {
      id: "2",
      city: "Londres",
      choose: "",
    },
     */
  menuIsOpen: false,
  createAccount: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
  followed: false,
  isLogged: false,
  loadingLoginSubmit: false,
  loading: false,
  city: "",
  zipCode: "",
  // countryCode: "fr",
  units: "metric",
  API: {},
  messageSuccess: "",
  messageError: "",
  lang: "fr",
  apiSuccess: false,
  message: "",
  loginData: {
    email: "",
    password: "",
    id: "",
  },
  weatherAPI: "",
  choose: "",
  APISuccessUseEffect: {},
  APISuccessUseEffectLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case API_USE_EFFECT_SUCCESS:
      return {
        ...state,
        APISuccessUseEffect: {
          ...state.APISuccessUseEffect,
          ...action.payload,
        },
        APISuccessUseEffectLoading: false,
      };
    case CHOOSE_COUNTRY:
      return {
        ...state,
        choose: action.payload,
      };
    case OPEN_MENU:
      return {
        ...state,
        menuIsOpen: true,
      };

    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: false,
      };

    case LOGOUT:
      return {
        ...state,
        message: "déconnexion en cours...",
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        message: "déconnexion réussie",
        isLogged: false,
        loginData: {
          email: "",
          password: "",
          id: "",
        },
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        message: "problème de déconnexion",
        isLogged: true,
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
        message: "ton compte a été crée! ",
      };

    case SUBMITCREATEACCOUNTFORMERROR:
      return {
        ...state,
        loading: false,
        message: "impossible de créer ton compte!",
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

    case DELETE_CITY_ON_CLICK:
      return {
        ...state,
        API: {},
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

    case SUBMIT_IN_FRANCE:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        messageSuccess: "congratulations!",
        API: { ...action.payload },
        apiSuccess: true,
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        messageError: "ville inconnue ou zone de recherche vide",
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
        userId: "",
        isLogged: false,
        message: "erreur de connexion à votre compte",
      };

    case ON_FORM_LOGIN_SUCCESS:
      return {
        ...state,
        loadingLoginSubmit: false,
        isLogged: true,
        loginData: {
          ...state.loginData,
          id: action.payload,
        },
        message: "vous êtes connecté",
      };

    default:
      return state;
  }
};

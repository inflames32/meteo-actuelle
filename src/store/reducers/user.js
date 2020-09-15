import {
  INPUT_CITY_CHANGE,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  ON_FORM_LOGIN,
  ON_FORM_LOGIN_ERROR,
  ON_FORM_LOGIN_SUCCESS,
  ON_INPUT_CHANGE,
} from '../actions';

const initialState = {
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
  idUser: '',
  loginData: {
    email: '',
    password: '',
  },
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
        messageSuccess: 'congratulations!',
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
    // case ON_FORM_LOGIN:
    //   return {
    //     ...state,
    //     loadingLoginSubmit: true,
    //     isLogged: false,
    //   };
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

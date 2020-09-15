import { connect } from 'react-redux';
import Login from '../components/Login';

import { onFormLogin, onInputChange } from '../store/actions';

const mapState = (state) => ({
  email: state.user.email,
  password: state.user.password,
  userId: state.user.userId,
  loginData: state.user.loginData,
  loadingLoginSubmit: state.user.loadingLoginSubmit,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changedData) => {
    console.log(changedData);
    dispatch(onInputChange(changedData));
  },
  onFormLogin: () => {
    console.log(onFormLogin);
    dispatch(onFormLogin());
  },
});

export default connect(mapState, mapDispatch)(Login);

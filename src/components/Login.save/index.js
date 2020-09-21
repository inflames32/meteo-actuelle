import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './styles.scss';

const Login = ({
  onFormLogin,
  onInputChange,
  loginData,
  loadingLoginSubmit,
  isLogged,
}) => {
  const formInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormLogin();
  };

  return (
    <div className="container-login">

      <form
        className="container-form"
        action="POST"
        onSubmit={handleSubmit}
      >
        {isLogged && (
          <div className="isLogged">
            <div>
              Welcome {loginData.email}
            </div>
            <Button>Logout </Button>
          </div>
        )}
        {!isLogged && (
          <div>
            <Input
              type="email"
              name="email"
              value={loginData.email}
              className="form-email"
              onChange={formInputChange}
            />
            <Input
              type="password"
              name="password"
              value={loginData.password}
              className="form-password"
              onChange={formInputChange}
            />
            <Button
              type="submit"
              className="form-button"
            >ok
            </Button>
          </div>
        )}

        {loadingLoginSubmit && (
          <Button
            type="submit"
            className="form-button-disabled"
            disabled
            loading
          />
        )}
      </form>
      <span>welcome </span>
    </div>

  );
};

Login.propTypes = {
  loginData: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onformLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loadingLoginSubmit: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Login;

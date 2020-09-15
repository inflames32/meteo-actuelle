import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './styles.scss';

const Login = ({
  onFormLogin,
  onInputChange,
  loginData,
  loadingLoginSubmit,
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
        {!loadingLoginSubmit && (
          <Button
            type="submit"
            className="form-button"
          >ok
          </Button>
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
};

export default Login;

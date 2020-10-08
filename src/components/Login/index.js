import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

import './login.scss';

const Login = ({
    loginData,
    onInputChange,
    onFormLogin,
    loadingLoginSubmit,
    isLogged,
    message,
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
        <div className="login-container">
            <Header />
            <div className="login-body">
                <form className="login-form" onSubmit={handleSubmit}>
                    {!loadingLoginSubmit && (
                        <div className="login-body-input">
                            <Input
                                className="login-form-email"
                                type="email"
                                name="email"
                                value={loginData.email}
                                placeholder="email"
                                onChange={formInputChange}
                            />
                            <Input
                                className="login-form-password"
                                type="password"
                                name="password"
                                value={loginData.password}
                                placeholder="mot de passe"
                                focus
                                onChange={formInputChange}
                            />
                        </div>
                    )}
                    {loadingLoginSubmit && (
                        <div className="login-body-input">
                            <Input
                                className="login-form-email"
                                type="email"
                                name="email"
                                value={loginData.email}
                                placeholder="email"
                                onChange={formInputChange}
                                disabled
                            />
                            <Input
                                className="login-form-password"
                                type="password"
                                name="password"
                                value={loginData.password}
                                placeholder="mot de passe"
                                focus
                                onChange={formInputChange}
                                disabled
                            />
                        </div>
                    )}
                    {!loadingLoginSubmit && (
                        <div className="login-body-button">
                            <Button
                                type="submit"
                            >Je me connecte
              </Button>
                        </div>
                    )}
                    {loadingLoginSubmit && (
                        <div className="login-body-button">
                            <Button
                                loading
                                type="submit"
                                className="login-body-button"
                            >Je me connecte
              </Button>
                        </div>
                    )}
                    {isLogged && (
                        <span>{message}</span>
                    )}
                </form>
            </div>
            <Footer />
        </div>
    );
};

Login.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onFormLogin: PropTypes.func.isRequired,
    loadingLoginSubmit: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    loginData: PropTypes.object.isRequired,
};

export default Login;

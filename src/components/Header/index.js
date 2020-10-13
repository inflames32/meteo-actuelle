import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openBurgerMenu, logout } from '../../store/actions';

import '../../styles/header.scss';

const Header = ({
  isLogged,
  loginData,
  id,
  message,
  loading,
  openBurgerMenu,
  menuBurgerIsOpen,
  handleBtnLogout
}) => {
  const url = `/my-account/${id}`;
  //console.log(isLogged, '----');
  //console.log(loginData, '----');
  const handleBurgerMenu = () => {
    openBurgerMenu();
  };
  return (
    <div className="header">
      {!isLogged && (
        <div className="header-container">
          <Link
            to="/"
            className="header-container-title"
          >Météo actuelle
          </Link>
          <Link
            to="/signup"
            className="header-container-create"
          >Créer ton compte?
          </Link>
          <Link
            to="/signin"
            className="header-container-login"
          >Connexion
          </Link>
          <a
            className="burger-menu"
            onClick={
              handleBurgerMenu
            }
          >|||
          </a>

        </div>
      )}
      {isLogged && (
        <div className="header-container">
          <Link
            to="/"
            className="header-container-title"
          >What's the weather today?
            </Link>
          <Link to={url}>
            <span
              className="header-container-myaccount"
            >{loginData.email}
            </span>
          </Link>
          <Button
            className="deconnexion"
            type="button"
            onClick={handleBtnLogout}
          >Déconnexion
          </Button>
        </div>
      )}
      <span>{message}</span>
      {loading && (
        <div>...en cours de connexion...</div>
      )}
      {menuBurgerIsOpen
        && (
          <div className="burgermenu--isopen">
            <ul className="burgermenu--isopen-ul">
              <li>
                <Link
                  to="/signup"
                  className="burgermenu--isopen-create"
                >Créer ton compte?
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="burgermenu--isopen-login"
                >Connexion
                </Link>
              </li>
            </ul>
          </div>
        )}
    </div>
  );
};

Header.prototypes = {
  isLogged: PropTypes.bool.isRequired,
  loginData: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  openingMenu: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  loginData: state.user.loginData,
  isLogged: state.user.isLogged,
  loading: state.user.loading,
  menuBurgerIsOpen: state.user.menuBurgerIsOpen,
  message: state.user.message,
});

const mapDispatch = (dispatch) => ({
  openBurgerMenu: () => {
    dispatch(openBurgerMenu());
  },
  handleBtnLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapState, mapDispatch)(Header);

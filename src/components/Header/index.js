import React from 'react';
import toast from 'toastify';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openMenu, logout, closeMenu } from '../../store/actions';

import '../../styles/header.scss';
import '../../styles/burger-menu.scss';

const Header = ({
  isLogged,
  loginData,
  id,
  message,
  loading,
  menuIsOpen,
  openMenu,
  handleBtnLogout,
  closeMenu,
}) => {
  const url = `/user/${loginData.id}`;

  const handleBurgerMenu = () => {
    openMenu();
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
          >Météo Actuelle
          </Link>
          <Link to={url}>
            <span
              className="header-container-myaccount"
            >{loginData.email}
            </span>
          </Link>
          <Button
            className="header-container-logout"
            type="button"
            onClick={handleBtnLogout}
          >Déconnexion
          </Button>
        </div>
      )}
      {menuIsOpen && !isLogged
        && (
          <div className="burger-menu-container">
            <nav className="burger-menu-navigation">
              <div
                className="close-menu"
                onClick={
                  closeMenu
                }
              >X
              </div>
              <Link
                to="/signup"
                className="burger-menu-containe-create menu-item"
                onClick={
                  closeMenu
                }
              >Créer ton compte?
              </Link>
              <Link
                to="/signin"
                className="burger-menu-container-login menu-item"
                onClick={
                  closeMenu
                }
              >Connexion
              </Link>
              <Link
                to="/contact"
                className="burger-menu-container-contact menu-item"
                onClick={
                  closeMenu
                }
              >Contact
              </Link>
            </nav>
          </div>
        )}
      {menuIsOpen && isLogged
        && (
          <div className="burger-menu-container">
            <nav className="burger-menu-navigation">
              <div
                className="close-menu"
                onClick={
                  closeMenu
                }
              >X
              </div>
              <Link
                to="/signup"
                className="burger-menu-containe-create menu-item"
                onClick={
                  closeMenu
                }
              >Accéder à ton compte?
              </Link>
              <Link
                to="/signin"
                className="burger-menu-container-login menu-item"
                onClick={
                  closeMenu
                }
              >Déconnexion
              </Link>
              <Link
                to="/contact"
                className="burger-menu-container-contact menu-item"
                onClick={
                  closeMenu
                }
              >Contact
              </Link>
            </nav>
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
  menuIsOpen: state.user.menuIsOpen,
  message: state.user.message,
  menuBurgerIsOpen: state.user.menuBurgerIsOpen,

});

const mapDispatch = (dispatch) => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
  handleBtnLogout: () => {
    dispatch(logout());
  },

});

export default connect(mapState, mapDispatch)(Header);

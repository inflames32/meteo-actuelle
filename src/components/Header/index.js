import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({
  isLogged,
  loginData,
  id,
  message,
  loading,
  openingMenu,
  menuBurgerIsOpen,
}) => {
  const url = `/my-account/${id}`;

  // const handleBurgerMenu = () => {
  //   openBurgerMenu();
  //   console.log('je clic');
  // };
  return (
    <div className="header">
      {!isLogged && (
        <div className="header-container">
          <Link
            to="/"
            className="header-container-title"
          >What's the weather today?
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
            onClick={() => {
              console.log('je clic');
              openingMenu();
            }}
          > |||
          </a>
        </div>
      )}
      {
        isLogged && (
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
            <Button>Déconnexion</Button>
          </div>
        )
      }
      <span>{message}</span>
      {
        loading && (
          <div>...en cours de connexion...</div>
        )
      }

      {
        menuBurgerIsOpen
        && (
          <div>
            <ul className="burgermenuisopen">
              <li>
                <Link
                  to="/signup"
                  className="header-container-create"
                >Créer ton compte?
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="header-container-login"
                >Connexion
                </Link>
              </li>
            </ul>
          </div>
        )
      }

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

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import CreateAccount from '../CreateAccount';

import './styles.scss';

const Header = () => (
  <div className="header-container">
    <Link to="/" className="header-container-title">What's the weather today?</Link>
    <Link to="/signup" className="header-container-create">Créer ton compte? </Link>
    <Link to="/login" className="header-container-login">Connexion</Link>
  </div>

);

export default Header;

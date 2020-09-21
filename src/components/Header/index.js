import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import CreateAccount from '../CreateAccount';

import './styles.scss';

const Header = () => (
  <div className="header-container">
    <h1>What weather today?</h1>
    <Link to="/create-account">Créer ton compte? </Link>
    <Button primary type="button">Connexion</Button>
  </div>

);

export default Header;

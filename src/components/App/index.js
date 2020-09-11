// == Import npm
import React from 'react';

// == Import
import Counter from 'src/containers/Counter';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <Counter />
  </div>
);

// == Export
export default App;

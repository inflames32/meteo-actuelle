import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../../containers/SearchBar';
import Weather from '../../containers/Weather';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1>What weather today ?</h1>
    <SearchBar />
    <Weather />
  </div>
);

// == Export
export default App;

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../../containers/SearchBar';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1>What weather today ?</h1>
    <SearchBar />
  </div>
);

// == Export
export default App;

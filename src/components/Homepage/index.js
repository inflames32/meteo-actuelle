import React from 'react';
import Header from '../Header';
import SearchBar from '../../containers/SearchBar';
import Weather from '../../containers/Weather';

import './styles.scss';

const Homepage = () => (
  <div className="homepage-container">
    <Header />
    <div className="homepage-body">
      <SearchBar />
      <Weather />
    </div>
  </div>
);

export default Homepage;

import React from 'react';
import propTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './styles.scss';

const searchBar = ({ onInputChange, loading }) => {
  const handleInputChange = (evt) => {
    const { value } = evt.target;
    onInputChange({
      value,
    });
  };

  const handleButtonSearchBar = (event) => {
    event.preventDefault();
    console.log('ok!');
  };

  return (
    <div className="container">
      <form action="submit">

        {loading && (
          <Input
            type="text"
            value=""
            name="search-bar"
            className="search-bar"
            onChange={handleInputChange}
            icon="search"
          />
        )}

        <Input
          type="text"
          value=""
          name="search-bar"
          className="search-bar"
          onChange={handleInputChange}
          icon="search"
        />
        <Button
          primary
          className="container-button"
          type="button"
          onClick={handleButtonSearchBar}
        >OK
        </Button>
      </form>
    </div>
  );
};

searchBar.propTypes = {
  handleInputChange: propTypes.func.isRequired,
};

export default searchBar;

import React from 'react';
import propTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './styles.scss';

const SearchBar = ({
  loading,
  city,
  submitCitySearch,
  onInputChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('ok!');
    submitCitySearch();
  };

  return (
    <div className="container">
      <form
        action="POST"
        onSubmit={handleSubmit}
      >

        {/* {loading && (
          <Input
            type="text"
            value=""
            name="search-bar"
            className="search-bar"
            onChange={handleInputChange}
            icon="search"
          />
        )} */}

        <Input
          className="search-bar"
          type="text"
          value={city}
          onChange={(evt) => {
            onInputChange(evt.target.value);
          }}
          icon="search"

        />
        <Button
          primary
          className="container-button"
          type="submit"
        >OK
        </Button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  loading: propTypes.bool.isRequired,
  city: propTypes.string.isRequired,
  submitCitySearch: propTypes.func.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default SearchBar;

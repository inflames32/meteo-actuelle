import React from 'react';
import propTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './styles.scss';

const SearchBar = ({
  loading,
  city,
  submitCitySearch,
  onInputChange,
  messageError,
  messageSuccess,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('ok!');
    submitCitySearch();
  };

  return (
    <div className="container">
      <form
        action="GET"
        onSubmit={handleSubmit}
      >
        {messageError && (
          <div>message: {messageError}</div>
        )}
        {messageSuccess && (
          <div>message: {messageSuccess}</div>
        )}

        <Input
          className="search-bar"
          type="text"
          value={city}
          onChange={(evt) => {
            onInputChange(evt.target.value);
          }}
          icon="search"

        />
        {loading && (
          <Button basic loading>
            Loading
          </Button>
        )}

        {!loading && (
          <Button
            className="container-button"
            type="submit"
          >OK
          </Button>
        )}
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

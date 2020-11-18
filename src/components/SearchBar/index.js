import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import { inputCityChange, submit } from '../../store/actions';

import '../../styles/search-bar.scss';

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
    submitCitySearch();
  };

  return (
    <div className="container-searchbar">
      <form
        className="form-input"
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
          placeholder="Nom de la ville"
          type="text"
          value={city}
          onChange={(evt) => {
            onInputChange(evt.target.value);
          }}
          icon="search"
          focus

        />
        {loading && (
          <Button
            type="submit"
            className="container-button"
            loading
          />
        )}

        {!loading && (
          <Button
            className="container-button"
            type="submit"
          >Rechercher la ville
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
  messageError: propTypes.string.isRequired,
  messageSuccess: propTypes.string.isRequired,
};

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  data: state.user.data,
  loading: state.user.loading,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changeInput) => {
    dispatch(inputCityChange(changeInput));
  },
  submitCitySearch: () => {
    dispatch(submit());
  },
});

export default connect(mapState, mapDispatch)(SearchBar);

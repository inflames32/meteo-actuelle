import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

import { inputCityChange, submitError, submitButton, submitSuccess } from '../store/actions';

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.city,
  temp: state.user.temp,
  unity: state.user.unity,
  weather: state.user.weather,
  loading: state.user.loading,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changeInput) => {
    console.log(changeInput);
    dispatch(inputCityChange(changeInput));
  },
  submitButton: () => {
    console.log();
    dispatch(submitSuccess);
  },


});

export default connect(mapState, mapDispatch)(SearchBar);

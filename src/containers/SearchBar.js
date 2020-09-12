import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

import { inputCityChange, submitError, submit, submitSuccess } from '../store/actions';

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
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
  submitCitySearch: () => {
    console.log();
    dispatch(submit());
  },


});

export default connect(mapState, mapDispatch)(SearchBar);

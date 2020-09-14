import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

import { inputCityChange, submit } from '../store/actions';

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  data: state.user.data,
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

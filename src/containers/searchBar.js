import { connect } from 'react-redux';
import searchBar from '../components/searchBar';

import { inputCity } from '../store/actions';

const mapState = (state) => ({
  city: state.user.city,
  temp: state.user.temp,
  unity: state.user.unity,
  weather: state.user.weather,
  loading: state.user.loading,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changeData) => {
    console.log(changeData);
    dispatch(inputCity(changeData));
  },
});

export default connect(mapState, mapDispatch)(searchBar);

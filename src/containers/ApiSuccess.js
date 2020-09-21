import { connect } from 'react-redux';
import ApiSuccess from '../components/Weather/ApiSuccess';

import { selectUnit } from '../store/actions';

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  API: state.user.API,
  loading: state.user.loading,
  apiSuccess: state.user.apiSuccess,
});

const mapDispatch = (dispatch) => ({
  selectUnit: (units) => {
    dispatch(selectUnit(units));
  },
});

export default connect(mapState, mapDispatch)(ApiSuccess);

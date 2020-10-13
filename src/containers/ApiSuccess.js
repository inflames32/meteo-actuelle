import { connect } from 'react-redux';
import ApiSuccess from '../components/Weather/ApiSuccess';



const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  API: state.user.API,
  loading: state.user.loading,
  apiSuccess: state.user.apiSuccess,
  followed: state.user.followed,
});

const mapDispatch = (dispatch) => ({
  selectUnit: (units) => {
    dispatch(selectUnit(units));
  },

  addFollowed: () => {
    dispatch(addFollowed());
  },

  removeFollowed: () => {
    dispatch(removeFollowed());
  },
});


export default connect(mapState, mapDispatch)(ApiSuccess);

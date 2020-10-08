import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapState = (state) => ({
    loginData: state.user.loginData,
    isLogged: state.user.islogged,
});

const mapDispatch = (dispatch) => null;

export default connect(mapState, mapDispatch)(Header);


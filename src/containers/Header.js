// import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapState = (state) => ({
    loginData: state.user.loginData,
    isLogged: state.user.islogged,
    loading: state.user.loading,
});

const mapDispatch = () => null;

export default connect(mapState, mapDispatch)(Header);

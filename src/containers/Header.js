// import React from 'react';
import { connect } from 'react-redux';
import { openBurgerMenu } from '../store/actions';
import Header from '../components/Header';

const mapState = (state) => ({
    loginData: state.user.loginData,
    isLogged: state.user.islogged,
    loading: state.user.loading,
    menuBurgerIsOpen: state.user.menuBurgerIsOpen,
});

const mapDispatch = (dispatch) => ({
    openingMenu: () => {
        console.log('openingMenu in container');
        dispatch(openBurgerMenu());
    },
});

export default connect(mapState, mapDispatch)(Header);

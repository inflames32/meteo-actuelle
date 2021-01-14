import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu } from '../../store/actions';
import '../../styles/burger-menu.scss';

const BurgerMenu = ({ closeMenu }) => (
    <div className="burger-menu-container">
        <nav className="burger-menu-navigation">
            <div
                className="close-menu"
                onClick={
                    closeMenu()
                }
            >X
      </div>
            <Link
                to="/signup"
                className="burger-menu-containe-create menu-item"
            >Créer ton compte?
      </Link>
            <Link
                to="/signin"
                className="burger-menu-container-login menu-item"
            >Connexion
      </Link>
            <Link
                to="/contact"
                className="burger-menu-container-contact menu-item"
            >Contact
      </Link>
        </nav>
    </div>
);

const mapState = (state) => ({
    menuBurgerIsOpen: state.user.menuBurgerIsOpen,
});

const mapDispatch = (dispatch) => ({
    closeMenu: () => {
        dispatch(closeMenu());
    },
});

export default connect(mapState, mapDispatch)(BurgerMenu);

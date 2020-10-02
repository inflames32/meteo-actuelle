import { connect } from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import { submitCreateAccountForm, onCreateAccountInputChange, } from '../store/actions';

const mapState = (state) => ({
    createAccount: state.user.createAccount,
    password: state.user.createAccount.password,
    passwordConfirm: state.user.createAccount.passwordConfirm,
});

const mapDispatch = (dispatch) => ({
    onCreateAccountInputChange: (dataChanged) => {
        dispatch(onCreateAccountInputChange(dataChanged));
    },

    submitCreateAccountForm: () => {
        dispatch(submitCreateAccountForm());
    }
});

export default connect(mapState, mapDispatch)(CreateAccount);
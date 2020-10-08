import { connect } from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import { submitCreateAccountForm, onCreateAccountInputChange } from '../store/actions';

const mapState = (state) => ({
    createAccount: state.user.createAccount,
    password: state.user.createAccount.password,
    passwordConfirm: state.user.createAccount.passwordConfirm,
    message: state.user.message,
});

const mapDispatch = (dispatch) => ({
    onCreateAccountInputChange: (dataChanged) => {
        dispatch(onCreateAccountInputChange(dataChanged));
    },

    submitCreateAccountForm: () => {
        console.log('je submit le formulaire de création');
        dispatch(submitCreateAccountForm());
    },
});

export default connect(mapState, mapDispatch)(CreateAccount);

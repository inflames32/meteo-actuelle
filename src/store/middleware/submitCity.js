import axios from 'axios';

import {
    SUBMIT,
    submitError,
    submitSuccess,
} from '../actions';

const submitCity = (store) => (next) => (action) => {
    // console.log(store.getState());

    next(action);
    switch (action.type) {
        case SUBMIT: {
            const API_KEY = process.env.REACT_APP_API_KEY;
            const cityName = store.getState().user.city;
            const unity = store.getState().user.units;
            const language = store.getState().user.lang;
            axios({
                method: 'get',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unity}&appid=${API_KEY}&lang=${language}`,
            }).then((res) => {
                console.log(res);
                store.dispatch(submitSuccess(res.data));
            }).catch((err) => {
                store.dispatch(submitError(err));
            });
            break;
        }
        default:
    }
};

export default submitCity;

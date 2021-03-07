// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "./reducers";
import logMiddleware from "./middleware/logMiddleware";
import submitCity from "./middleware/submitCity";
import citiesUseEffect from "./middleware/citiesUseEffect";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    submitCity,
    citiesUseEffect
    // secondMiddleware,
  )
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;

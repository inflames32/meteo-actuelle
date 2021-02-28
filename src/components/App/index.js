import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

// == Import components
import Homepage from "../Homepage";
import CreateAccount from "../CreateAccount";
import Contact from "../Contact";
import Login from "../Login";
import Error404 from "../error404";
import User from "../User";
import store from "../../store";

// import "semantic-ui-css/semantic.min.css";
import "../../styles/App.scss";

// == Composant
const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const city = store.getState().user.citiesByDefault;
  const country = store.getState().user.citiesByDefault.choose;
  const { units } = store.getState().user;
  const { lang } = store.getState().user;

  const takeCitiesByDefaultInReducer = async (url, method) => {
    try {
      const res = await axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&,fr&${units}=${units}&appid=${API_KEY}&lang=${lang}`,
      });
      console.log(res.data, "reponse ici");
      // method(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    takeCitiesByDefaultInReducer();
  }, []);

  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={CreateAccount} />
        <Route exact path="/user/:id" component={User} />
        <Route component={Error404} />
      </Switch>
    </Provider>
  );
};

// == Export
export default App;

// <a href='https://pngtree.com/so/weather-forecast'>weather-forecast png from pngtree.com</a>

import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Weather from "../Weather";
import Footer from "../Footer";
import ApiUseEffect from "../Weather/ApiUseEffect";

import "../../styles/homepage.scss";

const Homepage = ({ APISuccessUseEffect, APISuccessUseEffectLoading }) => (
  <div className="homepage-container">
    <Header />
    <div className="homepage-body">
      {APISuccessUseEffectLoading && (
        <div className="spinner">
          <Spinner animation="grow" />
        </div>
      )}
      {!APISuccessUseEffectLoading && (
        <div className="useeffect">
          <span className="exemple">Exemple de météo possible:</span>
          <ApiUseEffect />
        </div>
      )}
      <SearchBar />
      <Weather />
    </div>
    <Footer />
  </div>
);
const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
  APISuccessUseEffectLoading: state.user.APISuccessUseEffectLoading,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Homepage);

import React from "react";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
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
          <Spinner animation="border" />
        </div>
      )}
      {!APISuccessUseEffectLoading && <ApiUseEffect />}
      <SearchBar />
      <Weather />
    </div>
    <Footer />
    <ToastContainer />
  </div>
);
const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
  APISuccessUseEffectLoading: state.user.APISuccessUseEffectLoading,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Homepage);

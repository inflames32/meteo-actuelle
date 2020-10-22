import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Weather from '../Weather';
import Footer from '../Footer';
import '../../styles/homepage.scss';

const Homepage = () => (
  <div className="homepage-container">
    <Header />
    <div className="homepage-body">
      <SearchBar />
      <Weather />
    </div>
    <Footer />
    <ToastContainer />
  </div>

);

export default Homepage;

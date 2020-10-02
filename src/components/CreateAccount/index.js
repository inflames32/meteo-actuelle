import React from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import './createAccount.scss';

const CreateAccount = () => (
  <div className="create-account-container">
    <Header />
    <h1>Créer son compte</h1>
    <div className="create-account-body">
      <div>
        <form action="POST">
          <input type="email" /> *
          <input type="password" /> *
          <button type="button">Création du compte</button>
        </form>
      </div>
    </div>
    {/* <Footer /> */}
  </div>

);

export default CreateAccount;

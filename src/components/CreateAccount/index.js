import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Input, Button } from 'semantic-ui-react';

import './createAccount.scss';

const CreateAccount = ({ createAccount, onCreateAccountInputChange, submitCreateAccountForm }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je click pour créer le compte');
    submitCreateAccountForm();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onCreateAccountInputChange({
      [name]: value,
    });
  };

  return (
    <div className="createaccount-container">
      <Header />

      <div className="createaccount-body">
        <h1>Créer son compte</h1>
        <div>
          <form
            className="createaccount-form"
            action="submit"
            onSubmit={handleSubmit}
          >
            <Input
              className="createaccount-form-email"
              type="email" name="email"
              value={createAccount.email}
              placeholder="email"
              onChange={handleInputChange}
            />
            <Input
              className="createaccount-form-password"
              type="password"
              name="password"
              value={createAccount.password}
              placeholder="mot de passe"
              focus onChange={handleInputChange} />
            <Input
              className="createaccount-form-password_confirm"
              type="password" name="passwordConfirm"
              value={createAccount.passwordConfirm}
              placeholder="confirmation du mot de passe"
              focus
              onChange={handleInputChange} />
            <div
              className="createaccount-form-button">
              <Button
                type="submit">Je crée mon compte</Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>

  )
};

export default CreateAccount;

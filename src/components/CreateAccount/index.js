import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import Header from '../Header';
import Footer from '../Footer';

import './createAccount.scss';

const CreateAccount = ({
  createAccount,
  onCreateAccountInputChange,
  submitCreateAccountForm,
  message,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je clic pour créer le compte');
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
        <h1 className="createAccount-title">Créer son compte</h1>
        <div>
          <form
            className="createaccount-form"
            action="submit"
            onSubmit={handleSubmit}
          >
            <Input
              className="createaccount-form-email"
              type="email"
              name="email"
              value={createAccount.email}
              placeholder="email"
              onChange={handleInputChange}
              focus
            />
            <Input
              className="createaccount-form-password"
              type="password"
              name="password"
              value={createAccount.password}
              placeholder="mot de passe"
              focus
              onChange={handleInputChange}
            />
            <Input
              className="createaccount-form-password_confirm"
              type="password"
              name="passwordConfirm"
              value={createAccount.passwordConfirm}
              placeholder="confirmation du mot de passe"
              focus
              onChange={handleInputChange}
            />
            <div className="createAccount-form-button">
              <Button type="submit">Je crée mon compte</Button>
              {message && (<p className="message">{message}</p>)}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default CreateAccount;

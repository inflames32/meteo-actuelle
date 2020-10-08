import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './error404.scss';

const error404 = () => (
    <div className="error404-container">
        <Header />
        <div className="error404-body">
            <img src="https://media1.tenor.com/images/9b9415b1457776bbbed74bf14419bec4/tenor.gif?itemid=11092516" alt="lost.gif" />
            <div className="error404-body-comm">Tu es perdu je pense bien...</div>
        </div>
        <Footer />
    </div>
);

export default error404;

import React from 'react';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { FaTwitch } from 'react-icons/fa';

import Header from '../Header';
import Footer from '../Footer';

import pierre from '../../../public/img/pierre.jpg';

import '../../styles/contact.scss';

const Contact = () => (
  <div className="contact-container">
    <Header />
    <div className="contact-container-body">
      <h1 className="contact-container-body-title">Contact</h1>
      <div className="contact-container-body-card">

        <div className="card">
          <div className="photo">
            <img src={pierre} alt="Pierre Cahuzac" />
          </div>
          <div className="text">
            <p className="name">Pierre Cahuzac</p>
            <p className="function"> Product Owner / Dev fullstack</p>
            <div className="socials-networks">
              <div className="div-icon">
                <div className="icon">
                  <a href="https://www.linkedin.com/in/pierre-cahuzac-60b8491a4/">
                    <GrLinkedin />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://github.com/inflames32">
                    <GrGithub />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://www.twitch.tv/badtupeupastest">
                    <FaTwitch />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Contact;

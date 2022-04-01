import React from 'react';

const Footer = () => {
  return (
    <footer className='section bg-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className=''>
              <h6 className='footer-heading text-uppercase text-white'>
                Information
              </h6>
              <ul className='list-unstyled footer-link mt-4'>
                <li>
                  <a href=''>Pages</a>
                </li>
                <li>
                  <a href=''>Our Team</a>
                </li>
                <li>
                  <a href=''>Feuchers</a>
                </li>
                <li>
                  <a href=''>Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-3'>
            <div className=''>
              <h6 className='footer-heading text-uppercase text-white'>
                Ressources
              </h6>
              <ul className='list-unstyled footer-link mt-4'>
                <li>
                  <a href='https://github.com/gauravsingh9356'>GitHub </a>
                </li>
                <li>
                  <a href='https://linkedin.com/in/gauravsingh9356'>LinkedIn</a>
                </li>
                <li>
                  <a href='https://gsportfolio.netlify.app'>PortFolio</a>
                </li>
                <li>
                  <a href='https://noobhood.herokuapp.com'>
                    My Best Project Till Now
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-2'>
            <div className=''>
              <h6 className='footer-heading text-uppercase text-white'>Help</h6>
              <ul className='list-unstyled footer-link mt-4'>
                <li>
                  <a href=''>Terms of Services</a>
                </li>
                <li>
                  <a href=''>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className=''>
              <h6 className='footer-heading text-uppercase text-white'>
                Contact Us
              </h6>
              <p className='contact-info mt-4'>
                Contact us if need help with anything!
              </p>
              <p className='contact-info'>+919517608244</p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-5'>
        <p className='footer-alt mb-0 f-14'>
          2022 © Gaurav Singh, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

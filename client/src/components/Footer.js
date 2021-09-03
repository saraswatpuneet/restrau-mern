import React, { Fragment } from "react";
import { Container, Row, Col, Button, Form } from "reactstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
/* import "../assets/styles/style.css"; */

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='footer bg-f'>
          <Container className='unique-color-dark'>
            <Row>
              <Col className='col-md-3 col-sm-8'>
                <div className='footer-info'>
                  <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                    Adresa
                  </h2>
                </div>
                <address className='wow fadeInUp' data-wow-delay='0.4s'>
                  <p>
                    Parcul Tineretului
                    <br />
                    Aleea Trandafirilor <br /> Nr. 123
                  </p>
                </address>
              </Col>
              <Col className='col-md-3 col-sm-8'>
                <div className='footer-info section-title'>
                  <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                    Rezervari
                  </h2>
                  <address className='wow fadeInUp' data-wow-delay='0.4s'>
                    <p>072 999 0033 | 072 123 6661</p>
                    <p>
                      <a
                        href='mailto:food4fun@company.com'
                        target='_blank'
                        rel='noreferrer'
                      >
                        food4fun@company.com
                      </a>
                    </p>
                  </address>
                </div>
              </Col>
              <Col className='col-md-3 col-sm-8'>
                <div className='footer-info footer-open-hour'>
                  <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                    Orar
                  </h2>
                  <div className='wow fadeInUp' data-wow-delay='0.4s'>
                    <p>Luni: Îmchis</p>
                    <div>
                      <strong>Marți - Vineri</strong>
                      <p>7:00 AM - 9:00 PM</p>
                    </div>
                    <div>
                      <strong>Sâmbătă & Duminică</strong>
                      <p>11:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className='col-md-3 col-sm-8'>
                <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                  Subscriptie
                </h2>
                <div className='subscribe_form'>
                  <Form className='subscribe_form'>
                    <input
                      name='EMAIL'
                      id='subs-email'
                      className='form_input'
                      placeholder='Adresa de email...'
                      type='email'
                    />
                    <Button type='submit' className='submit'>
                      SUBSCRIBE
                    </Button>
                    <ul className='list-inline f-social'>
                      <li className='list-inline-item'>
                        <a
                          href='https://www.facebook.com/'
                          target='_blank'
                          without
                          rel='noreferrer'
                        >
                          <FaFacebookF />
                          {/* <i className='fab fa-facebook' aria-hidden='true'></i> */}
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a
                          href='https://twitter.com/'
                          target='_blank'
                          without
                          rel='noreferrer'
                        >
                          <FaTwitter />
                          {/* <i className='fab fa-twitter' aria-hidden='true'></i> */}
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a
                          href='https://www.linkedin.com/'
                          target='_blank'
                          without
                          rel='noreferrer'
                        >
                          <FaLinkedinIn />
                          {/* <i className='fab fa-linkedin' aria-hidden='true'></i> */}
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a
                          href='https://www.instagram.com/goo'
                          target='_blank'
                          without
                          rel='noreferrer'
                        >
                          <FaInstagram />
                          {/* <i className='fab fa-instagram' aria-hidden='true'></i> */}
                        </a>
                      </li>
                    </ul>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
          {/* <div className='text-right p-3'>
            <p className='text-white'>
              Licenta Informatica 2021 ID Muresanu Catalin
            </p>
          </div> */}
        </div>
      </Fragment>
    );
  }
}

export default Footer;

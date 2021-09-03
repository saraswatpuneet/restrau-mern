import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Stuff1 from "../../assets/images/stuff-img-01.jpg";
import Stuff2 from "../../assets/images/stuff-img-02.jpg";
import Stuff3 from "../../assets/images/stuff-img-03.jpg";

import "./style.css";

class Chefs extends React.Component {
  render() {
    return (
      <Container className='stuff-box'>
        <Row>
          <Col className='col-lg-12'>
            <h2>Bucatarii nostrii</h2>
            <p>Avem cei mai bun bucatari din tara</p>
          </Col>
        </Row>

        <Row>
          <Col className='col-md-4 col-sm-6"'>
            <div className='our-team'>
              <img src={Stuff1} alt='Williamson, Master Chef' />
              <div className='team-content'>
                <h3 className='title'>Williamson</h3>
                <span className='post'>Master Chef</span>
                <ul className='social'>
                  <li>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/goo'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col className='col-md-4 col-sm-6"'>
            <div className='our-team'>
              <img src={Stuff2} alt='Christian, Senior Chef' />
              <div className='team-content'>
                <h3 className='title'>Christian</h3>
                <span className='post'>Senior Chef</span>
                <ul className='social'>
                  <li>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/goo'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col className='col-md-4 col-sm-6"'>
            <div className='our-team'>
              <img src={Stuff3} alt='Alex, Junior Chef' />
              <div className='team-content'>
                <h3 className='title'>Alex</h3>
                <span className='post'>Junior Chef</span>
                <ul className='social'>
                  <li>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/goo'
                      target='_blank'
                      without
                      rel='noreferrer'
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chefs;

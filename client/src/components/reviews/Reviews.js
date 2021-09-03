import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "reactstrap";

import Profile1 from "../../assets/images/profile-1.jpg";
import Profile2 from "../../assets/images/profile-2.jpg";
import Profile3 from "../../assets/images/profile-3.jpg";

import "./style.css";

class Reviews extends React.Component {
  render() {
    return (
      <Container className='customer-reviews-box'>
        <Row>
          <Col className='col-lg-12 heading-title text-center'>
            <h2>Recenziile clientilor nostri</h2>
            <p>Parerile bune, dar si mai putin bune, ale acestora</p>
          </Col>
        </Row>

        <Row>
          <Col className='col-md-8 mr-auto ml-auto text-center'>
            <Carousel>
              <Carousel.Item className='text-center'>
                <div className='img-box p-1 border rounded-circle m-auto'>
                  <img
                    className='d-block w-100 rounded-circle'
                    src={Profile1}
                    alt='Profile '
                  />
                </div>
                <h5 className='mt-4 mb-0'>
                  <strong className='text-warning text-uppercase'>
                    Paul Mitchel
                  </strong>
                </h5>
                <h6 className='text-dark m-0'>Turist</h6>
                <p className='m-0 pt-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                  scelerisque non non purus. Suspendisse varius nibh non
                  aliquet.
                </p>
              </Carousel.Item>

              <Carousel.Item>
                <div className='img-box p-1 border rounded-circle m-auto'>
                  <img
                    className='d-block w-100 rounded-circle'
                    src={Profile2}
                    alt='Profile '
                  />
                </div>
                <h5 className='mt-4 mb-0'>
                  <strong className='text-warning text-uppercase'>
                    Roul Anthony
                  </strong>
                </h5>
                <h6 className='text-dark m-0'>Turist</h6>
                <p className='m-0 pt-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                  scelerisque non non purus. Suspendisse varius nibh non
                  aliquet.
                </p>
              </Carousel.Item>

              <Carousel.Item>
                <div className='img-box p-1 border rounded-circle m-auto'>
                  <img
                    className='d-block w-100 rounded-circle'
                    src={Profile3}
                    alt='Profile '
                  />
                </div>
                <h5 className='mt-4 mb-0'>
                  <strong className='text-warning text-uppercase'>
                    Alex Serghei
                  </strong>
                </h5>
                <h6 className='text-dark m-0'>Bucatar</h6>
                <p className='m-0 pt-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                  scelerisque non non purus. Suspendisse varius nibh non
                  aliquet.
                </p>
              </Carousel.Item>

              {/* <a
                class='carousel-control-prev'
                href='#reviews'
                role='button'
                data-slide='prev'
              >
                <FcLeft />
                <span class='sr-only'>Previous</span>
              </a>
              <a
                class='carousel-control-next'
                href='#reviews'
                role='button'
                data-slide='next'
              >
                <FcRight />
                <span class='sr-only'>Next</span>
              </a> */}
            </Carousel>
            {/* <FcRight onClick={this.next} /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Reviews;

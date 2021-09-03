import React, { Component, Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Button, Row, Col } from "reactstrap";
/* import { Link } from "react-router-dom"; */

import Rest1 from "../../assets/images/slider-01.jpg";
import Rest2 from "../../assets/images/slider-02.jpg";
import Rest3 from "../../assets/images/slider-03.jpg";

import "./style.css";

class CarouselImg extends Component {
  render() {
    return (
      <Fragment>
        <Carousel fade>
          <Carousel.Item>
            <Container className='item-container' fluid={true}>
              <Row>
                <Col>
                  <img src={Rest2} alt='First slide' />
                </Col>

                <Col>
                  <Carousel.Caption>
                    <h2>Hai sa ne cunoastem mai bine!</h2>
                    <Button className='buton' href='/about-us'>
                      Despre noi{" "}
                    </Button>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='item-container' fluid={true}>
              <Row>
                <Col>
                  <img src={Rest1} alt='First slide' />
                </Col>

                <Col>
                  <Carousel.Caption>
                    <h2>Vrei sa planifici un eveniment?</h2>
                    <Button className='buton' href='/reservation'>
                      Rezervari{" "}
                    </Button>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container className='item-container' fluid={true}>
              <Row>
                <Col>
                  <img src={Rest3} alt='First slide' />
                </Col>

                <Col>
                  <Carousel.Caption>
                    <h2>De ce ai pofta noi iti putem oferi!</h2>
                    <Button className='buton' href='/menu'>
                      Meniu{" "}
                    </Button>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* <Carousel.Item>
              <img className='d-block' src={Rest2} alt='Second slide' />
              <Carousel.Caption className='d-block caption-wrap'></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block' src={Rest3} alt='Third slide' />
              <Carousel.Caption className='d-block caption-wrap'></Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>

        {/* <Container className='col-md-5 col-lg-5 info'>
            <h1>Poate nu cel mai bun, dar cel mai gustos restaurant</h1>
            { <p>Nu crezi? Incearca!</p>}
            <Button className='buton' href='/menu'>
              {" "}
              Menu
            </Button>
          </Container> */}
      </Fragment>
    );
  }
}

export default CarouselImg;

import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import InfoRestaurant from "../../assets/images/open.jpg";
import "./style.css";

class InfoRest extends Component {
  render() {
    return (
      <Fragment>
        <div className='about-section-box'>
          <Container>
            <Row>
              <Col className='col-lg-6 col-md-6 col-sm-12 text-center'>
                <h1>
                  Bine ati venit la <span> Food 4 Fun Restaurant</span>
                </h1>
                <h4>"Little Big Story" despre noi</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.{" "}
                </p>
                <p>
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros. Sed aliquam metus lorem, a pellentesque tellus pretium
                  a. Nulla placerat elit in justo vestibulum, et maximus sem
                  pulvinar.
                </p>
                <Button className='buton' href='/about-us'>
                  Despre noi
                </Button>
              </Col>
              <Col className='col-lg-6 col-md-6 col-sm-1'>
                <img
                  className='img-fluid'
                  src={InfoRestaurant}
                  alt='Deschis 24/7, aproape'
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default InfoRest;

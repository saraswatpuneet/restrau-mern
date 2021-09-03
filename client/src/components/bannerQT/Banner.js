import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import "./style.css";

class Banner extends React.Component {
  render() {
    return (
      <Fragment>
        <Container className='qt-box qt-background' fluid={true}>
          <Row>
            <Col className='col-md-8 ml-auto mr-auto text-center'>
              <p class='lead '>
                "Cine intelege insa ca in inima lui exista o bucatarie magica va
                fi intotdeauna generos, iar iubirea lui va fi neconditionata"
              </p>
              <span class='lead'>Don Miguel Ruiz</span>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Banner;

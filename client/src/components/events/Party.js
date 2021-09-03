import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PartyImg from "../../assets/images/party.jpg";

import "./style.css";

class Party extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='align-items-center'>
            <Col className='col-lg-6 '>
              <div id='headingGroup' className='text-center d-none d-lg-block'>
                <h2> Fa din orice iesire un eveniment</h2>
                <p>
                  Restaurantul Food 4 Fun din București beneficiază de un salon
                  pentru organizare evenimente corporate. Salonul Ballroom
                  corespunde tuturor cerinţelor pentru organizarea de:
                  conferințe, cursuri de formare profesională şi leadership,
                  sesiuni de training, seminarii de vânzări şi training,
                  workshop-uri, prezentări de maşini, prezentări de modă,
                  recepții, expoziții, conferințe de presă, cursuri de formatori
                  şi multe altele.
                </p>
              </div>
            </Col>
            <Col className='col-lg-6'>
              <img className='img-fluid offer' src={PartyImg} alt='Party' />
            </Col>
          </Row>
        </Container>

        <div className='packets'>
          <h2>Pachete optionale</h2>
          <ul className='list-unstyled'>
            <li>Candy bar- 3,5 euro/persoana</li>
            <li>Fotograf/videograf – prin casa propie de evenimente</li>
            <li>Dansuri de nunta- 120 lei/sedinta</li>
            <li>Aranjamente florale</li>
            <li>Masina de epoca </li>
            <li>Luna de miere</li>
            <li>Inghetata thailandeza</li>
            <li>DJ</li>
            <li>Zane botez​</li>
          </ul>
          <div className='panel-footer col-md-4 col-sm-4 offset-md-4'>
            <Button className='btn-block buton' href='/reservation'>
              Rezerva!
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Party;

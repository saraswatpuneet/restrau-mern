import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import WeddingImg from "../../assets/images/wedding.jpg";

import "./style.css";

class Wedding extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h2>Avantajele Saloanelor noastre</h2>
          <ul className='list-unstyled'>
            <li>Fara taxe ascunse</li>
            <li>Fara chirie sala</li>
            <li>Bucatarie proprie</li>
            <li>Locuri de parcare</li>
            <li>Gradina amenajata </li>
            <li>Generator</li>
            <li>Meniuri pentru vegetarieni</li>
            <li>Degustare gratuita</li>
            <li>Servicii wedding planner​</li>
          </ul>
        </Container>

        <Container>
          <Row className='align-items-center'>
            <Col className='col-lg-6'>
              <div id='headingGroup' className='text-center d-none d-lg-block'>
                <h2> De ce sa vii la noi pentru nunta?</h2>
                <p>
                  Dacă ești în căutarea unui meniu de nuntă în București, la un
                  restaurant de lux, într-un salon spectaculos, cu mâncare
                  delicioasă, ai găsit locul perfect! Restaurant Food4Fun din
                  sector 4, București, îți oferă aranjamente așa cum îți
                  dorești, cu flori ca în povești, preparate extravagante, un
                  candy bar delicios, totul într-o atmosferă ca de basm, pentru
                  ca tu să ai nunta de vis pe care ți-o dorești.
                </p>
              </div>
            </Col>
            <Col className='col-lg-6'>
              <img className='img-fluid offer' src={WeddingImg} alt='Nunta' />
            </Col>
          </Row>

          <Row>
            <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
              <div className='panel-heading'>
                <h3>Nunta Basic</h3>
              </div>
              <div className='panel-body text-center'>
                <p>
                  <strong>55 Euro</strong>
                </p>
              </div>
              <ul className='list-group text-center'>
                <li className='list-group-item'> +10% taxa servicii</li>
              </ul>
              <div className='panel-footer'>
                <Button className='btn-block buton' href='/reservation'>
                  Rezerva!
                </Button>
              </div>
            </Col>
            <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
              <div className='panel-heading'>
                <h3>Nunta Premium</h3>
              </div>
              <div className='panel-body text-center'>
                <p>
                  <strong>65 Euro </strong>
                </p>
              </div>
              <ul className='list-group text-center'>
                <li className='list-group-item'>+10% taxa servicii</li>
              </ul>
              <div className='panel-footer'>
                <Button className='btn-block buton' href='/reservation'>
                  Rezerva!
                </Button>
              </div>
            </Col>
            <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
              <div className='panel-heading'>
                <h3>Nunta Deluxe</h3>
              </div>
              <div className='panel-body text-center'>
                <p>
                  <strong>75 Euro </strong>
                </p>
              </div>
              <ul className='list-group text-center'>
                <li className='list-group-item'> +10% taxa servicii</li>
              </ul>
              <div className='panel-footer'>
                <Button className='btn-block buton' href='/reservation'>
                  Rezerva!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Wedding;

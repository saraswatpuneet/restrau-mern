import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../../assets/styles/style.css";
import BaptismImg from "../../assets/images/baptism.jpg";

class Baptism extends Component {
  render() {
    return (
      <Container>
        <Row className='align-items-center'>
          <Col className='col-lg-6'>
            <img className='img-fluid offer' src={BaptismImg} alt='Botez' />
          </Col>
          <Col className='col-lg-6 '>
            <div id='headingGroup' className='text-center d-none d-lg-block'>
              <h2> Atunci cand copilul tau devine crestin </h2>
              <p>
                Restaurant Papion îți oferă meniuri pentru botez realizate cu
                multă pricepere de către maestrul nostru bucătar. Nu știi ce să
                alegi? Vino și o să te ajutăm cu oferte de botez create special
                pentru tine, cu aranjamente stabilite împreună, cu prăjituri
                delicioase pentru candy bar într-o locație de botez, în
                București, sectorul 1, perfectă pentru botezul îngerașului tău.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
            <div className='panel-heading'>
              <h3>Botez Basic</h3>
            </div>
            <div className='panel-body text-center'>
              <p>
                <strong>35 Euro</strong>
              </p>
            </div>
            <ul className='list-group text-center'>
              <li className='list-group-item'> +5% taxa servicii</li>
            </ul>
            <div className='panel-footer'>
              <Button className='btn-block buton' href='/reservation'>
                Rezerva!
              </Button>
            </div>
          </Col>
          <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
            <div className='panel-heading'>
              <h3>Botez Premium</h3>
            </div>
            <div className='panel-body text-center'>
              <p>
                <strong>45 Euro </strong>
              </p>
            </div>
            <ul className='list-group text-center'>
              <li className='list-group-item'>+5% taxa servicii</li>
            </ul>
            <div className='panel-footer'>
              <Button className='btn-block buton' href='/reservation'>
                Rezerva!
              </Button>
            </div>
          </Col>
          <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
            <div className='panel-heading'>
              <h3>Botez Deluxe</h3>
            </div>
            <div className='panel-body text-center'>
              <p>
                <strong>55 Euro </strong>
              </p>
            </div>
            <ul className='list-group text-center'>
              <li className='list-group-item'> +5% taxa servicii</li>
            </ul>
            <div className='panel-footer'>
              <Button className='btn-block buton' href='/reservation'>
                Rezerva!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Baptism;

import React, { Component } from "react";
import {
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

import "./style.css";

class ReservationForm extends Component {
  state = {
    msg: null,
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      msg: "Va multumim pentru rezervarea dumneavoastra. Vom reveni cu un raspuns cat mai repede posibil!",
    });
    window.setTimeout(() => {
      this.setState({ msg: null });
    }, 3000);
  };

  render() {
    return [
      <div className='reservationBg'>
        {
          <Container className='contact-box'>
            <h2>Pentru orice rezervare esti la un pas</h2>
          </Container>
        }

        <Container className='contact-box'>
          {this.state.msg ? (
            <Alert color='success'>{this.state.msg}</Alert>
          ) : null}
          <Form className='contact-form' onSubmit={this.onSubmit}>
            <Row>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6'>
                <Label for='firstName'>Nume</Label>
                <Input
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='Nume'
                  required
                />
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6'>
                <Label for='lastName'>Prenume</Label>
                <Input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Prenume'
                  required
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                />
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='phone'>Telefon</Label>
                <Input
                  type='number'
                  name='phone'
                  id='phone'
                  pattern='[0-9]{3}'
                  placeholder='Numarul de telefon'
                  required
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='events'>Selecteaza evenimentul</Label>
                <Input type='select'>
                  <option>Nunta</option>
                  <option>Botez</option>
                  <option>Eveniment special</option>
                </Input>
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='numberOfPeople'>
                  Selecteaza numarul de persoane
                </Label>
                <Input type='select'>
                  <option>1</option>
                  <option>2</option>
                  <option>3-5</option>
                  <option>5-10</option>
                  <option>10+</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='date'>Data</Label>
                <Input
                  type='date'
                  name='date'
                  id='exampleDate'
                  placeholder='date placeholder'
                />
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='time'>Ora</Label>
                <Input type='select'>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-12 col-lg-12 '>
                <Label for='textMessage'>Informatii aditionale</Label>
                <Input
                  type='textarea'
                  name='text'
                  id='textMessage'
                  placeholder='Daca doriti ceva special, aici puteti scrie'
                  required
                />
              </FormGroup>
            </Row>
            <Button className='buton mb-4' type='submit'>
              Trimite mesaj
            </Button>
          </Form>
        </Container>
      </div>,
    ];
  }
}

export default ReservationForm;

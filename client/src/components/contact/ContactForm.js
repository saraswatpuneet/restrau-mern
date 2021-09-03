import React, { Component, Fragment } from "react";
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
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "./style.css";

const LocationPin = ({ text }) => (
  <div className='pin'>
    <Icon icon={locationIcon} className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
);

class ContactForm extends Component {
  state = {
    msg: null,
  };

  static defaultProps = {
    center: {
      lat: 44.41047,
      lng: 26.10505,
    },
    address: "Food 4 Fun Restaurant",
    pin: {
      lat: 44.410476261252775,
      lng: 26.10505250815173,
    },
    zoom: 15,
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      msg: "Va multumim pentru mesajul / sugestia dumneavoastra. Vom reveni cu un raspuns cat mai repede posibil.",
    });
    window.setTimeout(() => {
      this.setState({ msg: null });
    }, 3000);
  };

  render() {
    return (
      <Fragment>
        <div className='contactBg'>
          <Container className='contact-box'>
            <h2>Pentru sugestii si feedback</h2>
          </Container>

          <Container>
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
              <FormGroup className='form-group mx-auto col-md-14 col-lg-14 '>
                <FormGroup>
                  <Label for='textMessage'>
                    Mesajul / sugestia dumneavoastra
                  </Label>
                  <Input
                    type='textarea'
                    name='text'
                    id='textMessage'
                    placeholder='Aici puteti lasa mesajul sau sugestia dumneavoastra!'
                    required
                  />
                </FormGroup>
              </FormGroup>
              <Button className='buton mb-4' type='submit'>
                Trimite mesaj
              </Button>
            </Form>
          </Container>
          <Container>
            <div style={{ height: "400px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAubPRTu3uyohnax2Iq90EIEnReerLyeAI",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <LocationPin
                  lat={this.props.pin.lat}
                  lng={this.props.pin.lng}
                  text={this.props.address}
                />
              </GoogleMapReact>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;

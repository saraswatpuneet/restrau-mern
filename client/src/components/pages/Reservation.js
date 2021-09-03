import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";
import ReservationForm from "../reservation/ReservationForm";
import Footer from "../Footer";
import ContactInfo from "../contactInfo/ContactInfo";
class Reservation extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Rezervari</h1>
        </Jumbotron>
        <ReservationForm />
        <ContactInfo />
        <Footer />
      </Fragment>
    );
  }
}

export default Reservation;

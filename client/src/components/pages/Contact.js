import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";
import ContactForm from "../contact/ContactForm";
import Footer from "../Footer";
import ContactInfo from "../contactInfo/ContactInfo";
class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Contact</h1>
        </Jumbotron>
        <ContactForm />
        <ContactInfo />
        <Footer />
      </Fragment>
    );
  }
}

export default Contact;

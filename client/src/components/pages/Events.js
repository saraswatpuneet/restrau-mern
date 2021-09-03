import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";
import Wedding from "../events/Wedding";
import Baptism from "../events/Baptism";
import Party from "../events/Party";
import Footer from "../Footer";
/* import ContactInfo from "../contactInfo/ContactInfo"; */

import "../events/style.css";

class Events extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Evenimente pentru tine</h1>
        </Jumbotron>
        <Wedding />
        <Baptism />
        <Party />
        {/* <ContactInfo />, */}
        <Footer />
      </Fragment>
    );
  }
}

export default Events;

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Jumbotron } from "reactstrap";

import { getItems, deleteItem } from "../../actions/itemActions";
import { addToCart } from "../../actions/cartActions";
import Meniu from "../menu/Meniu";
import Footer from "../Footer";
import Reviews from "../reviews/Reviews";
import ContactInfo from "../contactInfo/ContactInfo";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Meniu</h1>
        </Jumbotron>
        <Meniu />
        <Reviews />
        <ContactInfo />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { getItems, addToCart, deleteItem })(
  Menu
);

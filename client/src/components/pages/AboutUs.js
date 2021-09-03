import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";

import GalleryView from "../gallery/GalleryView";
import InfoRest from "../info/InfoRest";
import Banner from "../bannerQT/Banner";
import Chefs from "../chefs/Chefs";
import Footer from "../Footer";
import Reviews from "../reviews/Reviews";
import ContactInfo from "../contactInfo/ContactInfo";

class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Despre noi</h1>
        </Jumbotron>
        <InfoRest />
        <Chefs />
        <Banner />
        <GalleryView />
        <Reviews />
        <ContactInfo />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutUs;

import React from "react";
import { Container, Row, Col } from "reactstrap";
/* import { render } from "react-dom"; */
/* import { Carousel, Modal } from "reactstrap";
import { Gallery, ModalGateway } from "react-bootstrap"; */

import GalleryModal from "./GalleryModal";
import imgUrls from "./photos";

import "./style.css";

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)} key={index}>
        <img src={src} key={src} alt='' />
      </div>
    );
  }

  openModal(e, index) {
    this.setState({ currentIndex: index });
  }

  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }

  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }

  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }

  render() {
    return (
      <Container className='gallery-container'>
        <Row>
          <Col className='col-lg-12 heading-title text-center'>
            <h2>Cele mai bune preparate</h2>
            <p>
              Aceste imagini prezinta capodoperele realizate de bucatarii
              nostri!
            </p>
          </Col>
        </Row>
        <div className='gallery-grid'>
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </Container>
    );
  }
}

export default GalleryView;

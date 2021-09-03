import React, { Component, Fragment } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Alert,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getItems, deleteItem } from "../../actions/itemActions";
import { addToCart } from "../../actions/cartActions";

import AddItem from "./AddItem";
import EditItem from "./EditItem";

/* import "./style.css"; */

class Meniu extends Component {
  state = {
    msg: null,
  };

  componentDidMount() {
    this.props.getItems();
  }

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  onAddToCart = async (id, productId) => {
    try {
      await this.props.addToCart(id, productId, 1);
      this.setState({ msg: "Item added to cart" });
      setTimeout(() => this.setState({ msg: "" }), 3000);
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  onDeleteItem = async (id, productId) => {
    try {
      await this.props.deleteItem(id, productId);
      this.setState({ msg: "Item deleted" });
      setTimeout(() => this.setState({ msg: "" }), 3000);
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  shortenString = (string, size) => {
    return string
      ? string.length > size
        ? string.substring(0, size) + "..."
        : string
      : null;
  };

  render() {
    const { items, loading } = this.props.item;
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Fragment>
        <Container className='container'>
          {this.state.msg ? (
            <Alert color='warning'>{this.state.msg}</Alert>
          ) : null}
          <AddItem />
          {/* <Row>
            <Col>
              <div class='special-menu text-center'>
                <div class='button-group filter-button-group mb-3'>
                  <Button className='buton active' data-filter='*'>
                    All
                  </Button>
                  <Button className='buton' data-filter={item.category}>
                    Drinks
                  </Button>
                  <Button className='buton' data-filter={item.category}>
                    Lunch
                  </Button>
                  <Button className='buton ' data-filter={item.category}>
                    Dinner
                  </Button>
                </div>
              </div>
            </Col>
          </Row> */}
          {loading ? (
            <Alert color='warning'>Loading...</Alert>
          ) : items ? (
            <Row>
              {items.map((item) => (
                <Col className='col-md-4 special-grid' key={item._id}>
                  <Card className='mb-4'>
                    <CardImg
                      top
                      width='100%'
                      className='img-fluid'
                      src={item.image}
                      alt='Card image caption'
                    />
                    <CardBody className='why-text'>
                      <CardTitle tag='h4'>
                        {this.shortenString(item.title, 30)}
                      </CardTitle>
                      <CardSubtitle tag='h5'>{item.category}</CardSubtitle>

                      <CardText>
                        {this.shortenString(item.description, 100)}
                      </CardText>
                      <CardTitle tag='h6'>{item.price} RON </CardTitle>
                      {user && isAuthenticated ? (
                        user.role === 1 ? (
                          <Fragment>
                            <EditItem data={item} />
                            <Button
                              color='danger'
                              size='md'
                              onClick={this.onDeleteItem.bind(this, item._id)}
                            >
                              Delete
                            </Button>
                          </Fragment>
                        ) : (
                          <Button
                            color='success'
                            size='md'
                            onClick={this.onAddToCart.bind(
                              this,
                              user._id,
                              item._id
                            )}
                          >
                            Adaugare in cos
                          </Button>
                        )
                      ) : null}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Alert color='warning'>No meals found.</Alert>
          )}
        </Container>
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
  Meniu
);

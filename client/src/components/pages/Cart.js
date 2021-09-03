import React, { Component, Fragment } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getCart, deleteFromCart } from "../../actions/cartActions";
import { checkout } from "../../actions/orderActions";

import Checkout from "../Checkout";
import Footer from "../Footer";

import "../reservation/style.css";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      redirect: false,
    };
  }

  componentDidMount() {
    const { user, isAuthenticated } = this.props.auth;
    if (isAuthenticated && !this.props.cart.loading && !this.state.loaded) {
      this.getCartItems(user._id);
    }
  }

  componentDidUpdate(prevProps) {
    const { user, isAuthenticated } = this.props.auth;
    const { orders } = this.props.order;
    if (user !== prevProps.auth.user) {
      if (isAuthenticated && !this.state.loaded) {
        this.getCartItems(user._id);
      }
    }

    if (orders !== prevProps.order.orders) {
      this.setState({
        loaded: false,
        redirect: true,
      });
    }
  }

  static propTypes = {
    getCart: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    deleteFromCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    checkout: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired,
  };

  getCartItems = async (id) => {
    try {
      await this.props.getCart(id);
      this.state.loaded = true;
    } catch (err) {
      console.log(err);
    }
  };

  onDeleteFromCart = (id, itemId) => {
    this.props.deleteFromCart(id, itemId);
  };

  render() {
    const { user, isAuthenticated } = this.props.auth;
    const { cart, loading } = this.props.cart;
    console.dir(cart);

    if (this.state.redirect) {
      return <Redirect to='/orders' />;
    }

    return (
      <div className='reservationBg'>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Cos cumparaturi</h1>
        </Jumbotron>
        {isAuthenticated ? (
          <Fragment>
            {cart && cart.meals.length > 0 ? null : (
              <Alert color='info' className='text-center'>
                Cosul este gol!
              </Alert>
            )}
          </Fragment>
        ) : (
          <Alert color='danger' className='text-center'>
            Autentificare pentru vizualizare!
          </Alert>
        )}

        {isAuthenticated && !loading && this.state.loaded && cart ? (
          <Container className='contact-form'>
            <Form>
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
                <FormGroup className='form-group mx-auto col-md-4 col-lg-4'>
                  <Label for='oras'>Oras</Label>
                  <Input
                    type='text'
                    name='address'
                    id='adresaLivrare'
                    placeholder='Oras'
                    required
                  />
                </FormGroup>
                <FormGroup className='form-group mx-auto col-md-4 col-lg-4'>
                  <Label for='Judet'>Judet</Label>
                  <Input
                    type='text'
                    name='address'
                    id='Judet'
                    placeholder='Judet'
                  />
                </FormGroup>
                <FormGroup className='form-group mx-auto col-md-4 col-lg-4'>
                  <Label for='codPostal'>Cod Postal</Label>
                  <Input
                    type='number'
                    name='address'
                    id='codPostal'
                    placeholder='Cod Postal'
                    required
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup className='form-group mx-auto col-md-4 col-lg-4'>
                  <Label for='adresaLivrare'>Adresa de livrare</Label>
                  <Input
                    type='text'
                    name='address'
                    id='adresaLivrare'
                    placeholder='Strada'
                    required
                  />
                </FormGroup>
                <FormGroup className='form-group mx-auto col-md-4 col-lg-4'>
                  <Label for='bloc'>Bloc</Label>
                  <Input
                    type='number'
                    name='address'
                    id='bloc'
                    placeholder='Bloc'
                  />
                </FormGroup>
                <FormGroup className='form-group mx-auto col-md-4 col-lg-4'>
                  <Label for='Numar'>Numar</Label>
                  <Input
                    type='number'
                    name='address'
                    id='Numar'
                    placeholder='Numar'
                  />
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
                  />
                </FormGroup>
              </Row>
              <Row className='row'>
                {cart.meals.map((item) => (
                  <Col className='col-md-4' key={item._id}>
                    <Card>
                      <CardBody>
                        <CardTitle tag='h5'>{item.name}</CardTitle>
                        <CardSubtitle tag='h6'> {item.price} RON</CardSubtitle>
                        {/* <CardImg>
                        <img className='img-fluid' src={item.image} />
                      </CardImg> */}

                        <CardText> Cantitate - {item.quantity}</CardText>
                        <Button
                          color='danger'
                          onClick={this.onDeleteFromCart.bind(
                            this,
                            user._id,
                            item.productId
                          )}
                        >
                          Delete
                        </Button>
                      </CardBody>
                    </Card>
                    <br />
                  </Col>
                ))}
                <Col className='col-md-12'>
                  {cart && cart.order_total > 0 ? (
                    <Card>
                      <CardBody>
                        <CardTitle tag='h5'>
                          TOTAL = {cart.order_total} RON
                        </CardTitle>
                        <Checkout
                          user={user._id}
                          amount={cart.order_total}
                          checkout={this.props.checkout}
                        />
                      </CardBody>
                    </Card>
                  ) : null}
                </Col>
              </Row>
            </Form>
          </Container>
        ) : null}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { getCart, deleteFromCart, checkout })(
  Cart
);

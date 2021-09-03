import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Alert,
  Container,
  Jumbotron,
  Row,
  Col,
} from "reactstrap";

import { getOrders } from "../../actions/orderActions";

import "../reservation/style.css";

class Orders extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    const { user, isAuthenticated } = this.props.auth;
    if (isAuthenticated && !this.props.order.loading && !this.state.loaded) {
      this.onGetOrders(user._id);
    }
  }

  componentDidUpdate(prevProps) {
    const { user, isAuthenticated } = this.props.auth;
    if (user !== prevProps.auth.user) {
      if (isAuthenticated && !this.state.loaded) {
        this.onGetOrders(user._id);
      }
    }
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    getOrders: PropTypes.func.isRequired,
  };

  onGetOrders = async (id) => {
    await this.props.getOrders(id);
    this.state.loaded = true;
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const { orders, loading } = this.props.order;

    return (
      <div className='reservationBg'>
        <Jumbotron className='jumbo bg-f'>
          <h1 className='display-4'>Comenzi</h1>
        </Jumbotron>
        {isAuthenticated ? (
          <Fragment>
            {orders.length !== 0 ? null : (
              <Alert color='info' className='text-center'>
                Nu aveti comenzi anterioare!
              </Alert>
            )}
          </Fragment>
        ) : (
          <Alert color='danger' className='text-center'>
            Autentificare pentru vizualizare!
          </Alert>
        )}

        {isAuthenticated && !loading && this.state.loaded && orders.length ? (
          <Container>
            <Row>
              {orders.map((order) => (
                <Col className='col-md-12' key={order._id}>
                  <Card>
                    <CardBody>
                      <CardTitle tag='h4'>
                        {order.meals.length} produs(e) - Cost Total:
                        {order.order_total} RON{" "}
                      </CardTitle>
                      <Row>
                        {order.meals.map((item) => (
                          <Col className='col-md-4' key={item._id}>
                            <Card className='mb-2'>
                              <CardBody>
                                <CardTitle tag='h5'>
                                  {item.name} ({item.quantity})
                                </CardTitle>
                                <CardSubtitle tag='h6'>
                                  {item.price} RON / bucata
                                </CardSubtitle>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </CardBody>
                  </Card>
                  <br />
                </Col>
              ))}
            </Row>
          </Container>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  auth: state.auth,
});

export default connect(mapStateToProps, { getOrders })(Orders);

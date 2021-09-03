import React, { Component, Fragment } from "react";
/* import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Alert,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../actions/itemActions";
import { addToCart } from "../actions/cartActions";
import AddItem from "./AddItem"; */
/* import Menu from "./Menu"; */
import CarouselImg from "../carousel/CarouselImg";
import InfoRest from "../info/InfoRest";
import Banner from "../bannerQT/Banner";
import Reviews from "../reviews/Reviews";
import ContactInfo from "../contactInfo/ContactInfo";
import Footer from "../Footer";

class Home extends Component {
  /*   state = {
    msg: null,
  };
  componentDidMount() {
    this.props.getItems();
  }

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    addToCart: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  onAddToCart = async (id, productId) => {
    try {
      await this.props.addToCart(id, productId, 1);
      this.setState({ msg: "Item added to cart" });
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  onEditItem = async (id, item) => {
    try {
      await this.props.updateItem(id, item);
      this.setState({ msg: "Item updated" });
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  onDeleteItem = async (id, productId) => {
    try {
      await this.props.deleteItem(id, productId);
      this.setState({ msg: "Item deleted" });
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  render() {
    const { items } = this.props.item;
    const { isAuthenticated, user } = this.props.auth; */

  /* if (this.props.isAuthenticated && this.props.role === 1) */
  render() {
    return (
      <Fragment>
        <CarouselImg />
        <InfoRest />
        <Banner />
        {/* <Menu /> */}
        <Reviews />
        <ContactInfo />
        <Footer />
      </Fragment>
      /*  <Container>
          {this.state.msg ? (
            <Alert color='warning'>{this.state.msg}</Alert>
          ) : null}
          <AddItem />
          <div className='row'>
            {items.map((item) => (
              <div className='col-md-4'>
                <Card className='mb-4'>
                  <CardBody>
                    <CardTitle tag='h5'>{item.title}</CardTitle>
                    <CardSubtitle tag='h6'>RON. {item.price}</CardSubtitle>
                    <CardText>{item.category}</CardText>
                    {user && isAuthenticated ? (
                      user.role === 1 ? (
                        <Fragment>
                          <Button
                            color='warning'
                            size='sm'
                            onClick={this.onEditItem.bind(this, item)}
                          >
                            Edit
                          </Button>
                          <Button
                            color='danger'
                            size='sm'
                            onClick={this.onDeleteItem.bind(this, item._id)}
                          >
                            Delete
                          </Button>
                        </Fragment>
                      ) : (
                        <Button
                          color='success'
                          size='sm'
                          onClick={this.onAddToCart.bind(
                            this,
                            user._id,
                            item._id
                          )}
                        >
                          Add To Cart
                        </Button>
                      )
                    ) : (
                      null
                    )}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </Container> */
    );
  }
}

/* const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
}); */

export default Home;

import React, { Fragment, Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getItems, addItem, updateItem } from "../../actions/itemActions";
import { clearErrors } from "../../actions/errorActions";

class MealModal extends Component {
  state = {
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
    msg: null,
  };

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { data } = this.props;
    if (data) {
      this.setItem(data);
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for item error
      if (error) {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.description || !this.state.price) {
      this.setState({
        msg: "Please fill in all required fields.",
      });

      setTimeout(() => {
        this.setState({ msg: null });
      }, 3000);

      return;
    }

    const { title, description, category, price, image } = this.state;
    const { type } = this.props;

    let newItem = {
      title,
      description,
      category,
      price,
      image,
    };

    if (type === "add") {
      try {
        await this.props.addItem(newItem);
        this.setState({ msg: "Item added" });
        this.setItem({});
        setTimeout(() => {
          this.toggle();
          this.setState({ msg: "" });
        }, 3000);
      } catch (err) {
        this.setState({ msg: err });
      }
    } else if (type === "edit") {
      const { _id } = this.props.data;
      try {
        await this.props.updateItem(_id, newItem);
        this.setState({ msg: "Item updated" });
        setTimeout(() => {
          this.toggle();
          this.setState({ msg: "" });
        }, 3000);
      } catch (err) {
        this.setState({ msg: err });
      }
    }
  };

  toggle = () => {
    this.props.clearErrors();
    this.props.onToggleModal();
  };

  setItem = (item) => {
    const { title, description, category, price, image } = item;
    this.setState({
      title: title,
      description: description,
      category: category,
      price: price,
      image: image,
    });
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const closeBtn = (
      <Button className='close' onClick={this.toggle}>
        &times;
      </Button>
    );

    return (
      <Fragment>
        <Modal
          isOpen={this.props.show}
          toggle={this.toggle}
          returnFocusAfterClose={false}
        >
          <ModalHeader close={closeBtn}>
            {this.capitalize(this.props.type)} meal
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='title'>Titlu</Label>
                <Input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Denumirea produsului'
                  value={this.state.title || ""}
                  onChange={this.onChange}
                />
                <br />
                <Label for='description'>Descriere</Label>
                <Input
                  type='textarea'
                  name='description'
                  id='description'
                  placeholder='Descrierea produsului'
                  value={this.state.description || ""}
                  onChange={this.onChange}
                />
                <br />
                <Label for='category'>Categoria</Label>
                <Input
                  type='text'
                  name='category'
                  id='category'
                  placeholder='Categoria produsului'
                  value={this.state.category || ""}
                  onChange={this.onChange}
                ></Input>
                <br />
                <Label for='price'>Pretul</Label>
                <Input
                  type='number'
                  name='price'
                  id='price'
                  placeholder='Pretul produsului'
                  value={this.state.price || ""}
                  onChange={this.onChange}
                />
                <br />
                <Label for='image'>Imaginea</Label>
                <Input
                  type='text'
                  name='image'
                  id='image'
                  placeholder='Imaginea produsului'
                  value={this.state.image || ""}
                  onChange={this.onChange}
                />
                <br />
                {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}
                <Button color='dark' style={{ marginTop: "2rem" }} block>
                  {this.capitalize(this.props.type)} Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, {
  getItems,
  clearErrors,
  addItem,
  updateItem,
})(MealModal);

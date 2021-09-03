import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";

import MealModal from "./mealModal";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { user } = this.props.auth;
    if (user && user.role === 1) {
      return (
        <Fragment>
          <Button color='primary' className='buton' onClick={this.toggleModal}>
            Adauga produs
          </Button>
          <MealModal
            type='add'
            show={this.state.show}
            onToggleModal={this.toggleModal}
          />
        </Fragment>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AddItem);

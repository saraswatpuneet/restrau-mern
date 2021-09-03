import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";

import MealModal from "./mealModal";

class EditItem extends Component {
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
    return (
      <Fragment>
        <Button color='primary' size='md' onClick={this.toggleModal}>
          Edit
        </Button>
        <MealModal
          type='edit'
          show={this.state.show}
          onToggleModal={this.toggleModal}
          data={this.props.data}
        />
      </Fragment>
    );
  }
}

export default EditItem;

import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

import RegisterImg from "../../assets/images/reg.jpg";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Crete user object
    const newUser = { name, email, password };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    // Redirect home if authenticated
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <div className='register-form py-5'>
          <Container>
            <Row>
              <div className='col-lg-10 col-xl-12 mx-auto'>
                <Card className='card card-signin flex-row my-5'>
                  <CardImg
                    className='card-img-left d-none d-flex flex-row col'
                    src={RegisterImg}
                    alt='Register cooking image'
                  />
                  <CardBody className='col-12 col-lg-6 col-xl-6'>
                    <CardTitle className='text-center'>
                      <h1>Register</h1>
                      {this.state.msg ? (
                        <Alert color='danger'>{this.state.msg}</Alert>
                      ) : null}
                    </CardTitle>

                    <Form onSubmit={this.onSubmit} className='form-signin'>
                      <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input
                          type='text'
                          name='name'
                          id='name'
                          placeholder='Name'
                          className='mb-3 form-control'
                          onChange={this.onChange}
                        />
                        <Label for='email'>Email</Label>
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Email'
                          className='mb-3'
                          onChange={this.onChange}
                        />
                        <Label for='password'>Password</Label>
                        <Input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='Password'
                          className='mb-3'
                          onChange={this.onChange}
                        />
                        <Button
                          className='btn btn-lg btn-primary btn-block text-uppercase'
                          style={{ marginTop: "2rem" }}
                          block
                          type='submit'
                        >
                          Register
                        </Button>
                        <Button
                          className='btn btn-lg btn-google btn-block text-uppercase'
                          style={{ marginTop: "2rem" }}
                          block
                        >
                          <i className='fab fa-google mr-2'></i>
                          Sign in with Google
                        </Button>
                        <Button
                          className='btn btn-lg btn-facebook btn-block text-uppercase'
                          style={{ marginTop: "2rem" }}
                          block
                        >
                          <i className='fab fa-facebook-f mr-2'></i>
                          Sign in with Facebook
                        </Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);

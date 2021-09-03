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

import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

import LoginImg from "../../assets/images/login2.jpg";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
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

    const { email, password } = this.state;
    const user = { email, password };

    // Attempt to login
    this.props.login(user);
  };

  onLogin = (e) => {
    e.preventDefault();
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className='register-form py-5 '>
        <Container>
          <Row>
            <div className='col-lg-10 col-xl-12 mx-auto'>
              <Card className='card card-signin flex-row my-5'>
                <CardImg
                  className='card-img-left d-none d-flex flex-row col'
                  src={LoginImg}
                  alt='Login cooking image'
                />
                <CardBody className='col-12 col-lg-6 col-xl-6 mx-auto'>
                  <CardTitle className='card-title text-center'>
                    <h1>Login</h1>
                    {this.state.msg ? (
                      <Alert color='danger'>{this.state.msg}</Alert>
                    ) : null}
                  </CardTitle>
                  <Form
                    onSubmit={this.onSubmit}
                    className='form-signin mx-auto'
                  >
                    <FormGroup>
                      <Label for='email'>Email</Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='mb-3 form-control'
                        onChange={this.onChange}
                      />
                      <Label for='password'>Password</Label>
                      <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='mb-3 form-control'
                        onChange={this.onChange}
                      />
                      <Button
                        className='btn btn-lg btn-primary btn-block text-uppercase'
                        style={{ marginTop: "2rem" }}
                        block
                        type='submit'
                      >
                        Login
                      </Button>
                      <Button
                        className='btn btn-lg btn-google btn-block text-uppercase'
                        style={{ marginTop: "2rem" }}
                        block
                        onClick={this.onLogin}
                      >
                        Login with Google
                      </Button>
                      <Button
                        className='btn btn-lg btn-facebook btn-block text-uppercase'
                        style={{ marginTop: "2rem" }}
                        block
                        onClick={this.onLogin}
                      >
                        Login with Faceboook
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);

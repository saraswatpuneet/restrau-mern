import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink as RRNavLink } from "react-router-dom";

import Logout from "./auth/Logout";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const messageLink = isAuthenticated ? (
      <NavItem>
        <span className='navbar-text mr-3'>
          <strong>{user ? `Bine ai venit ${user.name}` : null}</strong>
        </span>
      </NavItem>
    ) : null;

    const authLinks = isAuthenticated ? (
      <Fragment>
        <NavItem>
          <NavLink tag={RRNavLink} exact to='/cart'>
            Cos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} exact to='/orders' className='mr-2'>
            Istoric
          </NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    ) : (
      <Fragment>
        <NavItem>
          <NavLink tag={RRNavLink} exact to='/register'>
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} exact to='/login'>
            Login
          </NavLink>
        </NavItem>
      </Fragment>
    );

    return (
      <Navbar
        dark
        expand='sm'
        className='navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar shadow-5-strong'
      >
        <Container>
          <NavbarBrand
            tag={RRNavLink}
            exact
            to='/'
            className='navbar-brand mr-auto'
          >
            Food 4 Fun
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='navbar-nav mr-auto smooth-scroll' navbar>
              {messageLink}
              <NavItem>
                <NavLink tag={RRNavLink} exact to='/'>
                  Acasa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to='about-us'>
                  Despre noi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to='events'>
                  Evenimente
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to='menu'>
                  Meniu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to='reservation'>
                  Rezervari
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to='contact'>
                  Contact
                </NavLink>
              </NavItem>

              {authLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);

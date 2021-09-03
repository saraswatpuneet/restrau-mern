import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import AppNavbar from "./AppNavbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Orders from "./pages/Orders";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";

import "../assets/styles/style.css";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <AppNavbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/reservation'>
            <Reservation />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>

          <Redirect to='/' />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(connect()(Main));

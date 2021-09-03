import React from "react";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_PUBLISHABLE =
  "pk_test_51IuOLXLxUMJqVVu2XmRZvdjVUNdCxkWnXbsKcuTsnXwuvAogALBHCTpA7jnf2Itt30vl091AlGNaSftrAwd2d85R00GybSQ9Lh";

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ user, amount, checkout }) => (
  <StripeCheckout
    name='Food 4 Fun Restaurant'
    description='Meals payment'
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency='RON'
    stripeKey={STRIPE_PUBLISHABLE}
    label='Plateste'
  />
);

export default Checkout;

const Order = require("../models/Order");
const Cart = require("../models/Cart");
const User = require("../models/User");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

module.exports.get_orders = async (req, res) => {
  const userId = req.params.id;
  Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};

module.exports.checkout = async (req, res) => {
  try {
    const userId = req.params.id;
    const { source, takeaway } = req.body;
    if (takeaway && takeaway > -1 && takeway < 2) {
      throw Error(
        "Wrong takeaway value. Expects a 0 for inhouse and 1 for takeaway order."
      );
    }
    let cart = await Cart.findOne({ userId });
    let user = await User.findOne({ _id: userId });
    // const email = user.email;
    const deliveryFee = process.env.DELIVERY_FEE;
    if (cart) {
      if (takeaway) cart.order_total += deliveryFee;
      const charge = await stripe.charges.create({
        amount: cart.order_total * 100,
        currency: "ron",
        source: source,
        // receipt_email: email,
      });
      if (!charge) throw Error("Payment failed");
      if (charge) {
        const order = await Order.create({
          userId,
          meals: cart.meals,
          order_total: cart.order_total,
          ...(takeaway && { takeaway: takeaway }),
        });
        const data = await Cart.findByIdAndDelete({ _id: cart.id });
        return res.status(201).send(order);
      }
    } else {
      res.status(500).send("You do not have any meals yet. Try adding some!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

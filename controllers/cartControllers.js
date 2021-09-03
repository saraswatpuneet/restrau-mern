const Cart = require("../models/Cart");
const Meal = require("../models/Meal");

module.exports.get_cart_meals = async (req, res) => {
  const userId = req.params.id;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart && cart.meals.length > 0) {
      res.send(cart);
    } else {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.add_cart_meal = async (req, res) => {
  const userId = req.params.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    let meal = await Meal.findOne({ _id: productId });
    if (!meal) {
      res.status(404).send("Meal not found!");
    }
    const price = meal.price;
    const name = meal.title;

    if (cart) {
      // if cart exists for the user
      let mealIndex = cart.meals.findIndex((p) => p.productId == productId);

      // Check if product exists or not
      if (mealIndex > -1) {
        let productMeal = cart.meals[mealIndex];
        productMeal.quantity += quantity;
        cart.meals[mealIndex] = productMeal;
      } else {
        cart.meals.push({ productId, name, quantity, price });
      }
      cart.order_total += quantity * price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      // no cart exists, create one
      const newCart = await Cart.create({
        userId,
        meals: [{ productId, name, quantity, price }],
        order_total: quantity * price,
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.delete_meal = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.mealId;
  try {
    let cart = await Cart.findOne({ userId });
    let mealIndex = cart.meals.findIndex((p) => p.productId == productId);
    if (mealIndex > -1) {
      let productMeal = cart.meals[mealIndex];
      cart.order_total -= productMeal.quantity * productMeal.price;
      cart.meals.splice(mealIndex, 1);
    }
    cart = await cart.save();
    return res.status(201).send(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const Meal = require("../models/Meal");

module.exports.get_meals = (req, res) => {
  Meal.find()
    /* .sort({ date: -1 }) */
    .then((meals) => res.json(meals));
};

module.exports.post_meal = async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    res.status(400).json({ msg: "Please enter all fields" });
  } else {
    try {
      const newMeal = new Meal(req.body);
      newMeal.save().then((meal) => res.json(meal));
    } catch (err) {
      res.json(err);
    }
  }
};

module.exports.update_meal = (req, res) => {
  Meal.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (
    meal
  ) {
    Meal.findOne({ _id: req.params.id }).then(function (meal) {
      res.json(meal);
    });
  });
};

module.exports.delete_meal = (req, res) => {
  Meal.findByIdAndDelete({ _id: req.params.id }).then(function () {
    res.json({ success: true });
  });
};

/* async function cookieValidator(cookies) {
  try {
    await externallyValidateCookie(cookies.testCookie);
  } catch {
    throw new Error("Invalid cookies");
  }
} */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = Meal = mongoose.model("meal", MealSchema);

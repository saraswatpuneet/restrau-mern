const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String,
    ref: "user",
  },
  meals: [
    {
      productId: {
        type: String,
        ref: "meals",
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."],
      },
      price: Number, // quantity * mealPrice
    },
  ],
  order_total: {
    type: Number, // order total
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  takeaway: {
    type: Number,
    default: 0, // 0 = inhouse, 1 = takeaway
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);

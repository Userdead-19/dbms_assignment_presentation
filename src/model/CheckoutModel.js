const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  User_ID: {
    type: String,
    required: true,
  },
  Cart_ID: {
    type: String,
  },
  Payment_ID: {
    type: String,
  },
  Added_date: {
    type: String,
  },
  Shipping_ID: {
    type: String,
  },
  Shipping_Cost: {
    type: Number,
  },
  Total_Paid: {
    type: Number,
  },

  Complete: {
    type: Boolean,
    default: false,
  },
});

const CheckoutModel = mongoose.model("Checkout", CheckoutSchema);

module.exports = CheckoutModel;

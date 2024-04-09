const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;

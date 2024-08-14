const mongoose = require("mongoose");

// Dummy schema as per given in the assignment email
const PriceDetailsSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  market: { type: String, required: true },
});

const PriceDetails = mongoose.model("PriceDetails", PriceDetailsSchema);

module.exports = PriceDetails;

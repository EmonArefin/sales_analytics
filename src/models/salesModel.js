const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
  }, { versionKey: false, timestamps: true });

  const Sales = mongoose.model('Sales', salesSchema);

  module.exports = Sales;
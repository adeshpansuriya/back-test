const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema({
  sku: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  vendor_id: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quality_requirements: {
    receiving_temp_low: { type: Number},
    receiving_temp_high: {type: Number}
  },
  images: [
      {source_url: {type: String}, description: {type: String}},
  ]
});

const model = mongoose.model("Ingredients", IngredientsSchema);

module.exports = model;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = require('./product');

const categorySchema = Schema({
  _id: {
    type: Number,
    required: true,
  },
  image_id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Category', categorySchema);

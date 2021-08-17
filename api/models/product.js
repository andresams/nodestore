const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
  },
  category_id: {
    type: Number,
    required: true,
  },
  image_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);

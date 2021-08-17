const mongoose = require('mongoose');

const Category = require('./category');

const { Schema } = mongoose;

const productSchema = Schema({
  _id: {
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
  category_id: { type: Schema.Types.Number, ref: Category },
});

module.exports = mongoose.model('Product', productSchema);

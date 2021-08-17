const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = Schema({
  id: {
    type: Number,
    required: true,
  },
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

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is Required']
  },
  price: {
    type: String,
    required: [true, 'Price is Required']
  },
  link: {
    type: String,
    required: [true, 'Link is Required']
  },
  imageURL: {
    type: String,
    required: [true, 'Image URL is Required']
  },
  description: String,
  tags: [String],
  priority: {
    type: Number,
    default: 2
  }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShirtSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Name is Required']
  },
  price: {
    type: String,
    require: [true, 'Price is Required']
  },
  link: {
    type: String,
    require: [true, 'Link is Required']
  },
  imageURL: {
    type: String,
    require: [true, 'Image URL is Required']
  },
  description: String
});

const Shirt = mongoose.model('shirt', ShirtSchema);
module.exports = Shirt;

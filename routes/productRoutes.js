const mongoose = require('mongoose');
const Product = mongoose.model('product');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  });

  app.post('/api/products', requireLogin, async (req, res) => {
    const { values } = req;
    const product = new Product(values);
    try {
      const savedProduct = await product.save();
      res.send(savedProduct);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

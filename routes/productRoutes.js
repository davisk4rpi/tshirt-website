const mongoose = require('mongoose');
const Product = mongoose.model('product');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/products', async (req, res) => {
    const products = await Product.find({}).sort({ priority: 1 });
    res.send(products);
  });

  app.post('/api/products', requireLogin, async (req, res) => {
    const { body } = req;
    const product = new Product(body);
    try {
      const savedProduct = await product.save();
      res.send(savedProduct);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete('/api/products/:id', requireLogin, async (req, res) => {
    const product = await Product.findById(req.params.id);
    await product.remove();
    const products = await Product.find({}).sort({ priority: 1 });
    res.send(products);
  });
};

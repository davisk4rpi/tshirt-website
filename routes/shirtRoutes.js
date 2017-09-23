const mongoose = require('mongoose');
const Shirt = mongoose.model('shirt');

module.exports = app => {
  app.get('/api/shirts', async (req, res) => {
    const shirts = await Shirt.find({});
    res.send(shirts);
  });
  app.post('/api/shirts' async (req, res) => {
    const {values} = req;
    const shirt  = new Shirt(values);
    try {
      const savedShirt = await shirt.save();
      res.send(savedShirt);
    } catch(err) {
      res.status(422).send(err);
    }
  });
};

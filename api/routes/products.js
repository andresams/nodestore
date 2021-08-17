const express = require('express');

const router = express.Router();
const Product = require('../models/product');

/**
 * GET: List all products
 */
router.get('/', async (req, res) => {
  try {
    const category = req.query.category_id;
    const filter = {};

    if (category) {
      filter.category_id = category;
    }
    const products = await Product.find(filter);
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(404).send('An error has happened while trying to list the products.');
  }
});

/**
 * GET: Return a single product
 */
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send('An error has happened while trying to list the products.');
  }
});

module.exports = router;

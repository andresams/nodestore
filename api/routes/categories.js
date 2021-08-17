const express = require('express');

const router = express.Router();
const Category = require('../models/category');

/**
 * GET: List all categories
 */
router.get('/', async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(404).send('An error has happened while trying to list the products.');
  }
});

/**
 * GET: Return a single category
 */
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(404).send('An error has happened while trying to list the products.');
  }
});

module.exports = router;

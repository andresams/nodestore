const express = require('express');

const router = express.Router();

/**
 * Nothing to see here
 */
router.get('/', (req, res) => {
  res.send('');
});

module.exports = router;

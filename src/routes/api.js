const express = require('express');
const { getData } = require('../data');

const router = express.Router();

router.get('/products', (req, res) => {
  const data = getData();
  if (!data) {
    return res.status(500).json({ error: 'Data not available' });
  }
  let products = data;
  const { sort , language} = req.query;
  if (language) {
    products = products.filter(product =>
      product.language.toLowerCase() === language.toLowerCase()
    );
  }
  if (sort) {
    products.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'language') return a.language.localeCompare(b.language);
      if (sort === 'version') return a.version - b.version;
      return 0;
    });
  }
//   console.log('Filtered and sorted products:', products); 
  res.json(products);
});

module.exports = router;

const express = require('express');
const { fetchAndStoreData } = require('./data');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await fetchAndStoreData();
});
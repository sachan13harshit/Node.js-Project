const axios = require('axios');
const fs = require('fs');
const path = require('path');

const dataUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json'; 
const dataPath = path.join(__dirname, 'data.json');

async function fetchAndStoreData() {
  try {
    const response = await axios.get(dataUrl);
    fs.writeFileSync(dataPath, JSON.stringify(response.data, null, 2));
    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

function getData() {
  if (fs.existsSync(dataPath)) {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }
  return null;
}

module.exports = { fetchAndStoreData, getData };
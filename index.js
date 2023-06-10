const express = require('express');
const fs = require('fs');

const app = express();

// Read the JSON file synchronously
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.get('/', (req, res) => {
  res.redirect('/data');
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(3035, () => {
  console.log('Server is running on http://localhost:3035');
});

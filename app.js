const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Microservice running on Azure ');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});

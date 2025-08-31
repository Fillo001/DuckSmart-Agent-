const express = require('express');
const bodyParser = require('body-parser');
const aiService = require('./routes/aiService');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api', aiService);

app.listen(PORT, () => {
  console.log(`DuckSmart backend running on http://localhost:${PORT}`);
});

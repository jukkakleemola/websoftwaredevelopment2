const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Serveri toimii!' });
});

app.listen(PORT, () => {
  console.log(`Serveri pyörii portissa ${PORT}`);
});

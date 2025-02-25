const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Määritä julkinen hakemisto, josta jaetaan tiedostoja
app.use(express.static('public'));

// Reitti juureen
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});

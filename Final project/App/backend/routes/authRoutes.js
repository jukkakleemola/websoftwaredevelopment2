const express = require('express');
const router = express.Router();

// Esimerkki kirjautumispisteestä
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Kirjautumistarkistus (esimerkiksi staattinen tarkistus)
  if (email === 'testuser@example.com' && password === 'test1234') {
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;

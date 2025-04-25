const bcrypt = require('bcrypt');
const pool = require('../config/db');

const createTestUser = async () => {
  const email = 'testuser@example.com';
  const password = 'test1234';

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword]
    );
    console.log('Testikäyttäjä lisätty:', result.rows[0]);
    process.exit();
  } catch (err) {
    console.error('Virhe lisättäessä testikäyttäjää:', err.message);
    process.exit(1);
  }
};

createTestUser();

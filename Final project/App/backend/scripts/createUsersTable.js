const pool = require('../config/db');

async function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log('✅ users-taulu luotu onnistuneesti!');
  } catch (err) {
    console.error('❌ Taulun luonnissa tapahtui virhe:', err);
  } finally {
    await pool.end();
  }
}

createUsersTable();

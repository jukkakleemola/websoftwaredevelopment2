const pool = require('../config/db');

const createDeviceUnits = async () => {
  const deviceId = 7; // Vaihda tähän oikea laite_id 
  try {
    for (let i = 1; i <= 20; i++) {
      const identifier = `TMH-X3-${String(i).padStart(3, '0')}`;
      await pool.query(
        'INSERT INTO device_units (device_id, identifier) VALUES ($1, $2)',
        [deviceId, identifier]
      );
    }
    console.log('12 -laitetta lisätty.');
    process.exit();
  } catch (err) {
    console.error('Virhe laitteiden lisäyksessä:', err);
    process.exit(1);
  }
};

createDeviceUnits();

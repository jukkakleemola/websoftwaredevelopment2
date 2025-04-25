const pool = require('../config/db');

const createDeviceUnits = async () => {
  const deviceId = 1; // Vaihda tähän oikea laite_id Elation Rayzor Beamille
  try {
    for (let i = 1; i <= 24; i++) {
      const identifier = `RZB-${String(i).padStart(3, '0')}`;
      await pool.query(
        'INSERT INTO device_units (device_id, identifier) VALUES ($1, $2)',
        [deviceId, identifier]
      );
    }
    console.log('24 Rayzor Beam -laitetta lisätty.');
    process.exit();
  } catch (err) {
    console.error('Virhe laitteiden lisäyksessä:', err);
    process.exit(1);
  }
};

createDeviceUnits();

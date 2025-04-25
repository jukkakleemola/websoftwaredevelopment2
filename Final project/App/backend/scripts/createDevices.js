const pool = require('../config/db'); 


const createDevices = async () => {
    const devices = [
      { category: 'Spot', manufacturer: 'Martin', model: 'Viper Air fx' },
      { category: 'Wash', manufacturer: 'Clay Paky', model: 'Sharpy 330' },
      { category: 'Beam', manufacturer: 'Elation', model: 'Rayzor Beam 2R' },
      { category: 'FX', manufacturer: 'Martin', model: 'Atomic 3000 Led' },
      { category: 'Spot', manufacturer: 'Lite Lees', model: 'LeSpot 330 pro' },
      { category: 'Wash', manufacturer: 'Clay Paky', model: 'Midi-B' },
      { category: 'Beam', manufacturer: 'Eurolite', model: 'TMH-X3' },
      { category: 'FX', manufacturer: 'Martin', model: 'Atomic 3000' }
    ];
  
    try {
      // Loopataan läpi laite-objektit ja lisätään ne tietokantaan
      for (const device of devices) {
        const { category, manufacturer, model } = device;
        const result = await pool.query(
          'INSERT INTO devices (category, manufacturer, model) VALUES ($1, $2, $3) RETURNING *',
          [category, manufacturer, model]
        );
        console.log('Lisätty laite:', result.rows[0]);
      }
      console.log('Kaikki laitteet lisätty onnistuneesti!');
      process.exit();
    } catch (err) {
      console.error('Virhe laitteiden lisäyksessä:', err.message);
      process.exit(1);
    }
  };
  

createDevices();

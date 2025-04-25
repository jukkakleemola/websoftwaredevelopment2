// controllers/deviceController.js
const pool = require('../config/db');

// Hakee erilliset kategoriat laitemallien taulusta
exports.getCategories = async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT category FROM devices ORDER BY category');
    res.json(result.rows); // Palauttaa esimerkiksi: [{ category: "Spot" }, { category: "Wash" }, ...]
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Hakee valmistajat, kun annettu kategoria
exports.getManufacturers = async (req, res) => {
  const { category } = req.query;
  try {
    const result = await pool.query(
      'SELECT DISTINCT manufacturer FROM devices WHERE category = $1 ORDER BY manufacturer',
      [category]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Hakee laitemallit tiettyyn valmistajaan ja kategoriaan
exports.getDevicesByManufacturer = async (req, res) => {
  const { category, manufacturer } = req.query;
  try {
    const result = await pool.query(
      'SELECT id, model FROM devices WHERE category = $1 AND manufacturer = $2 ORDER BY model',
      [category, manufacturer]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Aiemmin oleva getDevices (jota voidaan käyttää yleiseen hakuun)
exports.getDevices = async (req, res) => {
  const { category } = req.query;
  try {
    const query = category 
      ? 'SELECT id, manufacturer, category, model FROM devices WHERE category = $1' 
      : 'SELECT id, manufacturer, category, model FROM devices';
    
    const values = category ? [category] : [];
    const result = await pool.query(query, values);
    
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getDeviceUnits = async (req, res) => {
  const { deviceId } = req.query; // Huom: tämä endpoint palauttaa yksittäisen laitemallin laiteyksiköt
  try {
    const result = await pool.query(
      'SELECT id, identifier FROM device_units WHERE device_id = $1 ORDER BY identifier',
      [deviceId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getDeviceUnitById = async (req, res) => {
  const { id } = req.params; 
  try {
    const result = await pool.query(`
      SELECT du.id, du.identifier, du.status,
             d.manufacturer, d.model, d.category
      FROM device_units du
      JOIN devices d ON du.device_id = d.id
      WHERE du.id = $1
    `, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Laiteyksikköä ei löytynyt' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Hakee huoltotiedot laiteyksikölle
exports.getMaintenanceLogs = async (req, res) => {
  const { deviceUnitId } = req.params; // Korjattu niin, että käytetään samaa nimeä kuin reitissä
  const query = 'SELECT * FROM maintenance_logs WHERE device_unit_id = $1 ORDER BY maintenance_date DESC';

  try {
    const result = await pool.query(query, [deviceUnitId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Virhe huoltotietojen hakemisessa:', error);
    res.status(500).json({ error: 'Virhe huoltotietojen hakemisessa' });
  }
};


// Hakee vikailmoitukset laiteyksikölle
exports.getFaultReports = async (req, res) => {
  const { unitId } = req.params; // muutettu id 
  try {
    const result = await pool.query(
      'SELECT reported_at, description, status FROM fault_reports WHERE device_unit_id = $1 ORDER BY reported_at DESC',
      [unitId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};




// Päivitä laitteen käyttökelpoisuus
exports.updateOperationalStatus = async (req, res) => {
  const { deviceId } = req.params;
  const { isOperational } = req.body;

  try {
    const result = await pool.query(
      'UPDATE device_units SET is_operational = $1 WHERE id = $2 RETURNING *',
      [isOperational, deviceId]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Virhe käyttökelpoisuuden päivityksessä:', error);
    res.status(500).json({ error: 'Päivitys epäonnistui' });
  }
};

// Lisää huoltoloki
exports.addMaintenanceLog = async (req, res) => {
  const { deviceUnitId, maintenanceDescription } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO maintenance_logs (device_unit_id, description, date, maintenance_date) VALUES ($1, $2, NOW(), NOW()) RETURNING *',
      [deviceUnitId, maintenanceDescription]
    );
    res.json(result.rows[0]); // Palauttaa lisätyn huoltolokin
  } catch (error) {
    console.error('Virhe huollon lisäämisessä:', error);
    res.status(500).json({ error: 'Huollon lisäys epäonnistui' });
  }
};



// Lisää vikailmoitus
exports.addFaultReport = async (req, res) => {
  const { deviceUnitId, faultDescription } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO fault_reports (device_unit_id, description, reported_at) VALUES ($1, $2, NOW()) RETURNING *',
      [deviceUnitId, faultDescription]
    );
    res.json(result.rows[0]); // Palauttaa lisätyn vikailmoituksen
  } catch (error) {
    console.error('Virhe vikailmoituksen lisäämisessä:', error);
    res.status(500).json({ error: 'Vikailmoituksen lisäys epäonnistui' });
  }
};


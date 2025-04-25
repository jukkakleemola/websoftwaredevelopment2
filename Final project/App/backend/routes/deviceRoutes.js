// routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// Reitti yleiseen hakuun (voit pitää tämän, jos tarpeen)
//router.get('/devices', deviceController.getDevices);

// Uudet endpointit:
router.get('/categories', deviceController.getCategories);
router.get('/manufacturers', deviceController.getManufacturers);
router.get('/devices/byManufacturer', deviceController.getDevicesByManufacturer);
router.get('/device-units', deviceController.getDeviceUnits);

// Yksittäisen laiteyksikön haku ID:llä
router.get('/device-units/:id', deviceController.getDeviceUnitById);

//Huolto- ja vikailmoitukset, hakeminen
router.get('/device/:deviceUnitId/maintenance', deviceController.getMaintenanceLogs);
router.get('/device-units/:unitId/faults', deviceController.getFaultReports);

// Laitteen käyttökelpoisuuden päivittäminen
router.put('/device/:deviceId/operational', deviceController.updateOperationalStatus);

// Uuden huoltotiedon lisääminen
router.post('/device/:deviceUnitId/maintenance', deviceController.addMaintenanceLog);

// Uuden vikailmoituksen lisääminen
router.post('/device/:deviceUnitId/fault', deviceController.addFaultReport);


module.exports = router;

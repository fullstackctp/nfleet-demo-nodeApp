const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller');
const authJwt = require('../middlewares/authJwt');

router.get('/getVehicles', [authJwt.verifyToken], vehicleController.getVehicles);
router.post('/addVehicle', [authJwt.verifyToken], vehicleController.addVehicle);
router.put('/updateVehicle/:id', [authJwt.verifyToken], vehicleController.updateVehicle);
router.put('/assignDriver/:id', [authJwt.verifyToken], vehicleController.assignDriver);
router.put('/releaseDriver/:id', [authJwt.verifyToken], vehicleController.releaseDriver);
router.put('/assignDevice/:id', [authJwt.verifyToken], vehicleController.assignDevice);
router.put('/releaseDevice/:id', [authJwt.verifyToken], vehicleController.releaseDevice);

module.exports = router;

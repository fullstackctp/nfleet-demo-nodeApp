const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver.controller');
const authJwt = require('../middlewares/authJwt');

router.get('/getDrivers', [authJwt.verifyToken], driverController.getDrivers);
router.post('/addDriver', [authJwt.verifyToken], driverController.addDriver);

module.exports = router;

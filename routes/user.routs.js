const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const vehicleController = require('../controllers/vehicle.controller');
const authJwt = require('../middlewares/authJwt');

router.post('/signUp', userController.create);
router.post('/signIn', userController.signIn);
router.get('/getVehicles', [authJwt.verifyToken], vehicleController.getVehicles);
router.post('/addVehicle', [authJwt.verifyToken], vehicleController.addVehicle);
// router.get('/updateVehicle', [authJwt.verifyToken], userController.updateVehicle);

router.post('/addDevice', [authJwt.verifyToken], vehicleController.addDevice);
router.post('/addDriver', [authJwt.verifyToken], vehicleController.addDriver);

// router.get('/:id', userController.findOne);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.delete);

module.exports = router;

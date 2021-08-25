const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');
const authJwt = require('../middlewares/authJwt');

router.get('/getDevices', [authJwt.verifyToken], deviceController.getDevices);
router.post('/addDevice', [authJwt.verifyToken], deviceController.addDevice);

module.exports = router;

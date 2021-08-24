const Vehicles = require('../models/Vehicles');
const Device = require('../models/Device');
const jwt = require('jsonwebtoken');
const { request } = require('express');

exports.getVehicles = (req, res) => {
  Vehicles.find()
    .populate('device')
    .then((vehicles) => {
      res.send(vehicles);
    })
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

exports.addVehicle = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'please fill all details' });
  }
  console.log(req.body);
  const device = new Vehicles({
    license: req.body.license,
    make: req.body.make,
    reading: req.body.reading,
    vin: req.body.vin,
    id: req.body.id,
    driver: req.body.driver,
    device: req.body.device,
  });
  device
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

exports.addDevice = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'please fill all details' });
  }
  console.log(req.body);
  const device = new Device({
    imei: req.body.imei,
    lat: req.body.lat,
    lon: req.body.lon,
    name: req.body.name,
  });
  device
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

exports.addDriver = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'please fill all details' });
  }
  const device = new Device({
    device_history_id: req.body.device_history_id,
    driver_id: req.body.driver_id,
    driver_name: req.body.driver_name,
    released: req.body.released,
    vehicle_history_id: req.body.vehicle_history_id,
  });
  device
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};
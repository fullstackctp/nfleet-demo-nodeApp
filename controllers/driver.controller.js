const Driver = require('../models/Driver');

exports.addDriver = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'please fill all details' });
  }
  const driver = new Driver({
    device_history_id: req.body.device_history_id,
    driver_id: req.body.driver_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    released: req.body.released,
    vehicle_history_id: req.body.vehicle_history_id,
    license: req.body.license,
    territory: req.body.territory,
    vehicle_assigned: req.body.vehicle_assigned,
    address: req.body.address,
    email: req.body.email,
    geography: req.body.geography,
    phone: req.body.phone,
  });
  driver
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

exports.getDrivers = (req, res) => {
  Driver.find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

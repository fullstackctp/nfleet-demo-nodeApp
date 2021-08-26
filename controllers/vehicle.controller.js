const Vehicles = require('../models/Vehicles');
const pagination = require('../utility/pagination');

exports.getVehicles = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = pagination.getPagination(page, size);
  Vehicles.paginate(
    {},
    { offset, limit, customLabels: pagination.myCustomLabels, populate: ['driver', 'device'] },
  )
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
  const vehicle = new Vehicles({
    license: req.body.license,
    make: req.body.make,
    model: req.body.model,
    reading: req.body.reading,
    vin: req.body.vin,
    id: req.body.id,
    driver: req.body.driver,
    device: req.body.device,
    incl_no: req.body.incl_no,
    highest_speed: req.body.highest_speed,
    last_mileage: req.body.last_mileage,
  });
  vehicle
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

exports.updateVehicle = (req, res) => {
  Vehicles.findByIdAndUpdate(
    req.params.id,
    {
      license: req.body.license,
      make: req.body.make,
      vin: req.body.vin,
      incl_no: req.body.incl_no,
      model: req.body.model,
      last_mileage: req.body.last_mileage,
    },
    { new: true },
  )
    .then((vehicle) => {
      if (!vehicle) {
        return res.status(400).send({ message: 'vehicle not found' });
      }
      res.send(vehicle);
    })
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

const Device = require('../models/Device');
const pagination = require('../utility/pagination');

exports.addDevice = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'please fill all details' });
  }
  const device = new Device({
    imei: req.body.imei,
    lat: req.body.lat,
    lon: req.body.lon,
    name: req.body.name,
    accuracy: req.body.accuracy,
    address: req.body.address,
    alt: req.body.alt,
    checked_in: req.body.checked_in,
    coolant_temp: req.body.coolant_temp,
    driver_id: req.body.driver_id,
    e_type: req.body.e_type,
    firmware: req.body.firmware,
    fuel_consumption: req.body.fuel_consumption,
    fuel_percent: req.body.fuel_percent,
    heading: req.body.heading,
    _id: req.body.id,
    locating: req.body.locating,
    msisdn: req.body.msisdn,
    on: req.body.on,
    place_id: req.body.place_id,
    rpm: req.body.rpm,
    speed: req.body.speed,
    sq: req.body.sq,
    sq_bars: req.body.sq_bars,
    sq_gps: req.body.sq_gps,
    t_type: req.body.t_type,
    vehicle_assigned: req.body.vehicle_assigned,
    vehicle_id: req.body.vehicle_id,
    verified: req.body.verified,
  });
  device
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: `something went wrong ${err}` });
    });
};

exports.getDevices = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = pagination.getPagination(page, size);
  Device.paginate({}, { offset, limit, customLabels: pagination.myCustomLabels })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: `something went wrong ${err}` });
    });
};

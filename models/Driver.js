const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    device_history_id: String,
    driver_id: String,
    driver_name: String,
    released: Boolean,
    vehicle_history_id: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Driver', driverSchema);

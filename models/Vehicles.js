const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    license: String,
    make: String,
    model: String,
    reading: Array,
    vin: String,
    id: String,
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
    },
    device: {
      type: Schema.Types.ObjectId,
      ref: 'Device',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Vehicles', vehicleSchema);

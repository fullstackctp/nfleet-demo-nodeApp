const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    license: String,
    make: String,
    model: String,
    reading: Array,
    vin: String,
    _id: String,
    incl_no: String,
    highest_Speed: Number,
    last_mileage: Number,
    driver: {
      type: Schema.Types.String,
      ref: 'Driver',
    },
    device: {
      type: Schema.Types.String,
      ref: 'Device',
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updated_by: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

vehicleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Vehicles', vehicleSchema);

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    imei: String,
    lat: Number,
    lon: Number,
    name: String,
    accuracy: Number,
    address: String,
    alt: Number,
    checked_in: Boolean,
    coolant_temp: Number,
    driver_id: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
    },
    // driver_id: String,
    e_type: Number,
    firmware: String,
    fuel_consumption: Number,
    fuel_percent: Number,
    heading: Number,
    _id: String,
    locating: Boolean,
    msisdn: String,
    onn: Boolean,
    place_id: String,
    rpm: Number,
    speed: Number,
    sq: Number,
    sq_bars: Number,
    sq_gps: Number,
    t_type: Number,
    timestamp: {
      type: Date,
      default: Date.now,
    },
    vehicle_assigned: Boolean,
    vehicle_id: String,
    verified: Boolean,
  },
  { timestamps: true },
);

deviceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Device', deviceSchema);

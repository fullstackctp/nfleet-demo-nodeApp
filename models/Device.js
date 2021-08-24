const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    imei: String,
    lat: Number,
    lon: Number,
    name: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Device', deviceSchema);

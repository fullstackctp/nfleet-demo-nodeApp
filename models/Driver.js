const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  city: String,
  country: String,
  is_inactive: String,
  state: String,
  state_code: String,
  street1: String,
  street2: String,
  street3: String,
  type: String,
  zip: String,
  zip_formatted: String,
});

const emailSchema = new Schema({
  email: String,
  html_supported: Boolean,
  is_inactive: Boolean,
  is_primary: Boolean,
  marketing: Boolean,
  type: String,
});

const geographySchema = new Schema({
  country: String,
  region: String,
  state: String,
});

const phoneSchema = new Schema({
  formatted: String,
  is_inactive: Boolean,
  marketing: Boolean,
  number: String,
});

const driverSchema = new Schema(
  {
    device_history_id: String,
    driver_id: String,
    released: Boolean,
    vehicle_history_id: String,
    first_name: String,
    last_name: String,
    license: String,
    territory: String,
    vehicle_assigned: Boolean,
    address: [addressSchema],
    email: [emailSchema],
    geography: [geographySchema],
    phone: [phoneSchema],
  },
  { timestamps: true },
);

driverSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});
driverSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Driver', driverSchema);

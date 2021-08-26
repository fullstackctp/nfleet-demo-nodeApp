require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const vehicleRoutes = require('./routes/vehicle.routes');
const driverRoutes = require('./routes/driver.routes');
const deviceRoutes = require('./routes/device.routes');
const app = express();

const uri = `${process.env.MONGO_DB_URI}`;
try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => console.log('connected'),
  );
} catch (err) {
  console.log('could not connect');
}

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/driver', driverRoutes);
app.use('/api/device', deviceRoutes);

app.listen(4000, () => console.log('listening on 4000'));

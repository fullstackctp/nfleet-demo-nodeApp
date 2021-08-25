const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routs');
const vehicleRoutes = require('./routes/vehicle.route');
const app = express();

const uri = 'mongodb://172.17.0.2:27017';
try {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('connected'),
  );
} catch (err) {
  console.log('could not connect');
}

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);

app.listen(4000, () => console.log('listening on 4000'));

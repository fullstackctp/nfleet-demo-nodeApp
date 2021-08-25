const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routs');
const vehicleRoutes = require('./routes/vehicle.route');
const app = express();

dotenv.config();
const uri = `${process.env.MONGO_DB_URI}`;
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

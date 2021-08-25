const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/auth.config');

exports.SignUp = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'please fill all details' });
  }
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  user
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 'something went wrong' });
    });
};

exports.signIn = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 76400,
    });
    res.status(200).send({
      id: user._id,
      email: user.email,
      accessToken: token,
    });
  });
};

// exports.delete = (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then((user) => {
//       if (!user) {
//         return res.status(400).send({ message: 'user not found' });
//       }
//       res.send({ message: 'user deleted successfully' });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: 'something went wrong' });
//     });
// };

import express from 'express';
var router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../api/user/model';
import config from '../../config/environment';

router.post("/", async (req, res) => {
  var user = await User.findOne({ email: req.body.email }, { email: 1, password: 1, status: 1 });
  if (!user) {
    return res.status(404).send({ message: 'Email not registered with us.' });
  } else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send({ message: 'Invalid credentials. Please try again.' });
    }
    if(user.status != 'active') {
      return res.status(403).send({ message: 'Access forbidden.' });
    }
    const token = jwt.sign({ _id: user._id }, config.getConstants().token.secret);
    return res.status(200).send({ token: token });
  }
});

export default router;
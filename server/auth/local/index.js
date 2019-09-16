import express from 'express';
var router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../api/user/user.model';

router.post("/", async (req, res) => {
  var user = await User.findSimilarEmail(req.body.email);
  if (!user) {
    return res.status(404).send("Email not registered with Blik.");
  } else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid credentials. Please try again.");
    }
    if(user.status != 'active') {
      return res.status(403).send('Forbidden');
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // res.header("token", token).send(token);
    return res.status(200).send({ token: token });
  }
});

export default router;
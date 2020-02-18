import express from 'express';
var router = express.Router();
import jwt from 'jsonwebtoken';
import { find_users } from '../../user/controller';
import config from '../../environment';

router.post("/", async(req, res) => {
  let query = {
    mobile: req.body.mobile
  };
  var user = await find_users(query);
  if (user.length == 0) {
    return res.status(400).send({ message: 'Mobile not registered with us.' });
  } else {
    // try {
    //   let otp = await Otp.findOne({ mobile: req.body.mobile, otpToken: req.body.otp });
    //   if (otp.otpExpires < date) return res.status(403).send({ message: 'OTP has expired.' });
    // } catch(e) {
    //   console.log(e);
    //   return res.status(403).send({ message: 'Invalid OTP.' });
    // }
    if(user[0].status != 'active') {
      return res.status(403).send({ message: 'Access forbidden.' });
    }
    const token = jwt.sign({ _id: user[0]._id }, config.getConstants().token.secret);
    return res.status(200).send({ token: token });
  }
});

export default router;
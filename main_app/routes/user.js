'use strict';

import { Router } from 'express';
import * as controller from '../controllers/user';
import * as auth from '../auth/common';

var router = new Router();

// //get all users
// router.get('/', auth.hasRole('admin'), controller.index);

// //delete user
// router.delete('/:id', auth.hasRole('admin'), controller.destroy);

//get user details
router.get('/me', auth.isLoggedin(), controller.my_details);

// //get user details
// router.get('/details/:id', auth.hasRole('admin'), controller.getDetails);

// //update user details
// router.post('/', auth.isLoggedin(), controller.update);

// //change password
// router.put('/password', controller.changePassword);

// //get user details for admin
// router.get('/userDetails/:id', auth.hasRole('admin'), controller.show);

// //sign up
// router.post('/signup', controller.create);

// //search number
// router.get('/search/:number', controller.findByNumber);

// //add wallet money
// router.post('/wallet', auth.isLoggedin(), controller.addMoney);

// //homepage details
// router.get('/dashboard', auth.isLoggedin(), controller.getHomepageDetails);

// //general details
// router.get('/general', controller.getGeneralDetails);

module.exports = router;
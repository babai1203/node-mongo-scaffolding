'use strict';

import { Router } from 'express';
import * as controller from '../controllers/setting';
import * as auth from '../auth/common';

var router = new Router();

router.get('/', auth.isLoggedin(), controller.get_constants);

module.exports = router;
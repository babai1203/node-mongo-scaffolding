import { Router } from 'express';
var router = Router();
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

// router.get('/', auth.function, controller.function);

module.exports = router;
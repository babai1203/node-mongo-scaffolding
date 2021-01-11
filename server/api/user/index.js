import { Router } from 'express';
var router = Router();
import * as controller from './controller';
import * as auth from '../../auth/auth.service';

router.get('/create', auth.hasRole(['admin']), controller.register_new_user);

module.exports = router;
import express from 'express';
var router = express.Router();

router.use('/login', require('./login').default);

export default router;
const express = require('express');
const router = express.Router();
const facebookRouter = require('./facebook');

router.use('/facebook', facebookRouter);


module.exports = router;
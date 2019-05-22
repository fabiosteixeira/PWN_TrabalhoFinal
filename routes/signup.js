const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.render('/signup');
});

module.exports = router;

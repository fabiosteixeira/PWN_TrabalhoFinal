const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.render('login', { title: 'Fazer Login na P&aacute;Super H&eacute;rois Marvel' });
});

module.exports = router;

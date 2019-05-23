const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.render('signup', { title: 'Criar uma conta na página de Super Hérois Marvel' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.render('login', { title: 'Fazer Login na Página de Super Hérois Marvel' });
});

module.exports = router;

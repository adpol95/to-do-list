const { Router } = require('express');
const homeRet = require('./homePage')
const router = Router();

router.get('/', homeRet);

module.exports = router;
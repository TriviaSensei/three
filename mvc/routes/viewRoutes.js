const express = require('express');
const viewController = require('../controllers/viewController');
const router = express.Router();

router.use(viewController.httpsRedirect);

router.get('/', viewController.getHome);
module.exports = router;

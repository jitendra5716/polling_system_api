const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');


router.get('/',homeController.home);
router.get('/questionPage',homeController.questionPage);

router.use('/questions',require('./questions'));
router.use('/options',require('./options'));





module.exports = router;
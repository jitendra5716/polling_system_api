const express = require('express');
const router = express.Router();
const questionController = require('../controller/question_controller');
const opetionController = require('../controller/option_controller');

router.post('/create',questionController.create);
// router.get('/:id',opetionController.optionPage);
router.post('/:id/options/create',opetionController.create);
router.get('/:id/delete',questionController.delete);


module.exports = router;
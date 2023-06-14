const express = require('express');
const router  = express.Router();

const QuestionRoute = require('./question-route')

router.use('/question', QuestionRoute);


module.exports = router;
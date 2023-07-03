const express = require('express');
const router  = express.Router();

const QuestionRoute = require('./question-route')

router.use('/questions', QuestionRoute);


module.exports = router;
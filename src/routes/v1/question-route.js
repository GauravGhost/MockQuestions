const express = require('express');
const router = express.Router();
const {QuestionController} = require('../../controller')

// api/v1/question/

router.post('/', QuestionController.createQuestion)



module.exports = router
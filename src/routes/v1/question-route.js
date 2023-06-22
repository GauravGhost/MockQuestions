const express = require('express');
const router = express.Router();
const {QuestionController} = require('../../controller');
const {QuestionMiddleware} = require('../../middleware')

// api/v1/question/

router.post('/', QuestionMiddleware.CreateValidation, QuestionController.createQuestion)

router.get('/', QuestionController.getAllQuestion)

router.delete('/', QuestionController.deleteQuestion)

router.put('/', QuestionController.updateQuestion)


module.exports = router
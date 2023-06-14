const { QuestionService } = require('../services')
const {ErrorResponse, SuccessResponse} = require('../utils/common')


async function createQuestion(req, res) {
    console.log(req.body);
    try {
        const question = await QuestionService.createQuestion({
            name: req.body.name,
            link: req.body.link,
            difficulty: req.body.difficulty
        });
        SuccessResponse.data = question
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse);
    }
}

module.exports = {
    createQuestion
}
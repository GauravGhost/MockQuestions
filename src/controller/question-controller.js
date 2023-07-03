const { QuestionService } = require('../services')
const { ErrorResponse, SuccessResponse } = require('../utils/common')


async function createQuestion(req, res) {
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

async function getAllQuestion(req, res) {
    try {
        const response = await QuestionService.getAllQuestion(req.query.offSet, req.query.limit);
        SuccessResponse.data = response;

        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse);
    }
}

async function deleteQuestion(req, res){
    try {
        const response = await QuestionService.deleteQuestion(req.body.id);
        SuccessResponse.data = response;
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse);
    }
}

async function updateQuestion(req, res){
    try {
        const response = await QuestionService.deleteQuestion({
            id: req.body.id,
            link: req.body.link
        })
        return response;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createQuestion,
    getAllQuestion,
    deleteQuestion,
    updateQuestion
}
const { QuestionRepository } = require('../repositories');

const questionRepository = new QuestionRepository();

async function createQuestion(data) {
    try {
        const response = await questionRepository.create(data);
        return response;
    } catch (error) {
        throw new Error("Bad Request");
    }
}
async function getAllQuestion(offset, limit) {
    try {
        const response = await questionRepository.getAll(offset, limit);
        return response;
    } catch (error) {
        throw new Error("Bad Request");
    }
}

async function deleteQuestion(id) {
    try {
        const response = await questionRepository.destroy(id);
        return response;
    } catch (error) {
        throw new Error("Bad Request");
    }
}

async function updateQuestion(id, data) {
    try {
        const response = await questionRepository.update(id, data);
        return response;
    } catch (error) {
        throw new Error("Bad Request");
    }
}


module.exports = {
    createQuestion,
    getAllQuestion,
    deleteQuestion,
    updateQuestion
}
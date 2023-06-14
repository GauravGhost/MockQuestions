const { QuestionRepository } = require('../repositories');

const questionRepository = new QuestionRepository();

async function createQuestion(data) {
    try {
        const response = await questionRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    createQuestion
}
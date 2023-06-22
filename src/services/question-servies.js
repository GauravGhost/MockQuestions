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
async function getAllQuestion() {
    try {
        const response = await questionRepository.getAll();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteQuestion(id) {
    try {
        const response = await questionRepository.destroy(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateQuestion(id, data){
    try{
        const response = await questionRepository.update(id, data);
        return response;
    } catch (error){
        throw error;
    }
}


module.exports = {
    createQuestion,
    getAllQuestion,
    deleteQuestion,
    updateQuestion
}
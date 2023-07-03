const CrudRepository = require('./crud-repository');
const { Question} = require('../models');

class QuestionsRepository extends CrudRepository{
    constructor(){
        super(Question);
    }
    async getAll(offset = 0, limit = Infinity){
        try {
            const question = await Question.find().skip(offset).limit(limit);
            return question;
        } catch (error) {
            throw new Error("Bad Request");
        }
    }
}

module.exports = QuestionsRepository;
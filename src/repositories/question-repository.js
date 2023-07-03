const CrudRepository = require('./crud-repository');
const { Question} = require('../models');

class QuestionsRepository extends CrudRepository{
    constructor(){
        super(Question);
    }
    async getAll(offset = 0, limit = Infinity){
        try {
            const tweet = await Question.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = QuestionsRepository;
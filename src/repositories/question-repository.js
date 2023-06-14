const CrudRepository = require('./crud-repository');
const { Question } = require('../models');

class QuestionsRepository extends CrudRepository{
    constructor(){
        super(Question);
    }
}

module.exports = QuestionsRepository;
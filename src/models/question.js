const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
  name: {
    type: String,
    requierd: true,
    trim: true
  },

  link: {
    type: String,
    required: true,
    trim: true,
  },

  difficulty: {
    type: String,
    required: true,
    trim: true,
    enum: ['EASY', 'MEDIUM', 'HARD']
  }
});


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
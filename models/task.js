const mongoose = require('mongoose');

const tasks = new mongoose.Schema({
  task: { // Название задачи
    type: String,
    required: true,
    minlength: 1,
  },
  priorities: { // Приоритет задачи
    type: String,
    required: true,
    minlength: 1,
  },
  inprogress: { // Статус работы задачи
    type: String,
  },
  description: { // Описание задачи
    type: String,
    required: true,
    minlength: 1,
  },
  complite: {
    type: String,
    default: new Date(),
  },
});

module.exports = mongoose.model('tasks', tasks);

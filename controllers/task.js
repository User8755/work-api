const tasks = require('../models/task');

module.exports.getTask = (req, res, next) => {
  tasks
    .find({})
    .then((item) => res.send(item))
    .catch((err) => next(err));
};

module.exports.createTask = (req, res, next) => {
  const {
    task, priorities, inprogress, description, complite,
  } = req.body;
  tasks
    .create({
      task,
      priorities,
      inprogress,
      description,
      complite,
    })
    .then((item) => res.send(item))
    .catch((err) => next(err));
};

module.exports.updateTask = (req, res, next) => {
  tasks
    .findByIdAndUpdate(
      req.params.id,
      {
        inprogress: req.body.inprogress,
      },
      { new: true, runValidators: true },
    )
    .then((item) => {
      if (item) {
        res.send(item);
      } else {
        next();
      }
    })
    .catch((err) => next(err));
};

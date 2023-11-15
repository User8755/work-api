const tasks = require('../models/task');

module.exports.getTask = (req, res, next) => {
  tasks
    .find({})
    .then((item) => res.send(item))
    // eslint-disable-next-line no-console
    .catch((err) => next(err));
};

module.exports.createTask = (req, res, next) => {
  const {
    task, priorities, inprogress, description,
  } = req.body;
  tasks
    .create({
      task,
      priorities,
      inprogress,
      description,
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

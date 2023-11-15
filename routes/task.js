const router = require('express').Router();
const { getTask, createTask, updateTask } = require('../controllers/task');

router.get('/', getTask);
router.post('/', createTask);
router.patch('/:id', updateTask);

module.exports = router;

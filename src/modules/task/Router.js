const { Router } = require('express');
const getTask = require('./taskGetAll')
const addTask = require('./taskRegister')
const taskDelete = require('./taskDelete');
const taskChangeById = require('./taskChangeById')
const router = Router();

router.get('/', getTask);
router.post('/', addTask);
router.patch('/:taskId', taskChangeById);
router.delete('/:taskId', taskDelete);

module.exports = router;
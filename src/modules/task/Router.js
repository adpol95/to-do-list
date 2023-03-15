const { Router } = require('express');
const getTask = require('./taskGetAll')
const addTask = require('./taskRegister')
const taskDelete = require("./taskDelete");
const router = Router();

router.get('/', getTask);
router.post('/', addTask);
router.delete('/:taskId', taskDelete);

module.exports = router;
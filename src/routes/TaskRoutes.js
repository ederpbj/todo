const express = require('express');

const router = express.Router();

const TaskController = require('../controller/TaskController')

const TaskValidation = require('../middlewares/TaskValidation');

// Só executa create se passar pelo validation
router.post('/', TaskValidation, TaskController.create);

module.exports = router;
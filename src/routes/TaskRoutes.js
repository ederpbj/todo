const express = require('express');

const router = express.Router();

const TaskController = require('../controller/TaskController');

const TaskValidation = require('../middlewares/TaskValidation');
// const MacaddressValidation = require('../middlewares/MacaddressValidation');

//Cria uma tarefa
// Só executa create se passar pelo validation
router.post('/', TaskValidation, TaskController.create);

//Atualiza uma tarefa
// Se faz entender o id em controller, o nome que colocar aqui
router.put('/:id', TaskValidation, TaskController.update);

//Exibe uma única tarefa
router.get('/:id', TaskController.show);

//Deletar uma tarefa
router.delete('/:id', TaskController.delete);

//Atualiza o done
router.put('/:id/:done', TaskController.done);

//Listar todos, não precisa validar
router.get('/filter/all/:macaddress', TaskController.all);

//Late: para datas atrasadas
router.get('/filter/late/:macaddress', TaskController.late);

//Today: tarefas de hoje
router.get('/filter/today/:macaddress', TaskController.today);

//Week: tarefas da semana
router.get('/filter/week/:macaddress', TaskController.week);

//Week: tarefas do mês
router.get('/filter/month/:macaddress', TaskController.month);

//Year: tarefas do ano
router.get('/filter/year/:macaddress', TaskController.year);

module.exports = router;
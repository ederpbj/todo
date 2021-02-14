const TaskModel = require('../model/TaskModel');

class TaskController {
    // Função que cria task baseador no Model
    async create(req, res) {
        const task = new TaskModel(req.body);
        await task
            .save() //pede para mongo salvar
            .then(response => {
                return res.status(200).json(response);
            }) //se tudo der certo
            .catch(error => {
                return res.status(500).json(error);
            }); //se der errado
    }

    async update(req, res) {
        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new TaskController();
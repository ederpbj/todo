const TaskModel = require('../model/TaskModel');

//Constante que captura data e hora atual
const current = new Date();

//pegar data inicial e final
const {
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear
} = require('date-fns');

class TaskController {
    // Função que cria task baseador no Model
    //Cria tarefa
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

    //Atualiza uma tarefa
    async update(req, res) {
        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            })
    }

    //Lista todas
    async all(req, res) {
        //mudar req.body.macaddress para req.params, não recuparar mais pelo corpo e sim por params, = no http
        await TaskModel.find({ macaddress: { '$in': req.params.macaddress } }) //$in: para valores que existem
            .sort('when') //organiza por data
            .then(response => {
                return res.status(200).json(response) // se der tudo certo
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //Exibe uma tarefa
    async show(req, res) {
        await TaskModel.findById(req.params.id)
            .then(response => {
                if (response) {
                    // console.log('Passou aqui >>>>>>>>>>');
                    return res.status(200).json(response);
                }

            })
            .catch(error => {
                // console.log('Catch <<<<<<<');
                if (error) {
                    // console.log('Não deu <<<<<<<');
                    return res.status(404).json({ error: 'tarefa não encontrada!' });
                }
                else {
                    // console.log('Não deu mesmo <<<<<<<');
                    return res.status(500).json(error);
                }

            })
    }

    //Deleta uma tarefa
    async delete(req, res) {
        await TaskModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            })
    }

    // Atualiza o done
    async done(req, res) {
        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id }, //busca tarefa pelo id
            { 'done': req.params.done }, //
            { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //Exibe tarefas atrasadas, sino
    async late(req, res) {
        await TaskModel
            .find({
                'when': {
                    '$lt': current
                },
                'macaddress': { '$in': req.params.macaddress }//precisa informar no corpo da operação o macaddress
            }) //$lt: operador menor que <
            .sort('when') // organiza pela data
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //Tarefas de hoje
    async today(req, res) {
        await TaskModel
            //Vai no mongo e pega datas do dia, baseadas no macaddress
            .find({
                'macaddress': { '$in': req.params.macaddress },
                'when': { '$gte': startOfDay(current), '$lte': endOfDay(current) } //data maior ou igual que (>= $gte), inicio do dia atual. e menor ou igual ($lte) que fim do dia
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //Tarefas da semana
    async week(req, res) {
        await TaskModel
            //Vai no mongo e pega datas do dia, baseadas no macaddress
            .find({
                'macaddress': { '$in': req.params.macaddress },
                'when': { '$gte': startOfWeek(current), '$lte': endOfWeek(current) } //data maior ou igual que (>= $gte), inicio do dia atual. e menor ou igual ($lte) que fim do dia
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //Tarefas do mês
    async month(req, res) {
        await TaskModel
            //Vai no mongo e pega datas do dia, baseadas no macaddress
            .find({
                'macaddress': { '$in': req.params.macaddress },
                'when': { '$gte': startOfMonth(current), '$lte': endOfMonth(current) } //data maior ou igual que (>= $gte), inicio do dia atual. e menor ou igual ($lte) que fim do dia
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //Tarefas do ano
    async year(req, res) {
        await TaskModel
            //Vai no mongo e pega datas do dia, baseadas no macaddress
            .find({
                'macaddress': { '$in': req.params.macaddress },
                'when': { '$gte': startOfYear(current), '$lte': endOfYear(current) } //data maior ou igual que (>= $gte), inicio do dia atual. e menor ou igual ($lte) que fim do dia
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new TaskController();
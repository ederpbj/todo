const TaskModel = require('../model/TaskModel');

const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    // Destruturação, recebe do json enviado ao servidor
    const { macaddress, type, title, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatório!' });
    else if (!type)
        return res.status(400).json({ error: 'Tipo é obrigatório!' });
    else if (!title)
        return res.status(400).json({ error: 'Título é obrigatório!' });
    else if (!description)
        return res.status(400).json({ error: 'Descrição é obrigatória!' });
    else if (!when)
        return res.status(400).json({ error: 'Data e Hora são obrigatórios!' });
    else if (isPast(new Date(when)))
        return res.status(400).json({ error: 'Escolha uma data e hora futura!' });

    else {
        let exists;

        // Serve para upadate verificar se não existe outro igual na mesma hora.
        if (req.params.id) {
            exists = await TaskModel
                .findOne(
                    {
                        '_id': { '$ne': req.params.id }, //qualquer id diferente dos outros, tiranto eu tem outra tarefa no mesmo horario?
                        'when': { '$eq': new Date(when) }, //$eq se é igual a outra data e hora
                        'macaddress': { '$in': macaddress } //$in se esta contido
                    });
        } else {
            exists = await TaskModel
                .findOne(
                    {
                        'when': { '$eq': new Date(when) }, //$eq se é igual a outra data e hora
                        'macaddress': { '$in': macaddress } //$in se esta contido
                    });
        }
        if (exists) {
            return res.status(400).json({ error: 'Já existe uma tarefa nesse dia e hora!' });
        }

        next(); //chama próxima função, no caso o create, se tudo estiver ok
    }
}

module.exports = TaskValidation;
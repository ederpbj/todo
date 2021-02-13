const TaskModel = require('../model/TaskModel');

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

    else
        next(); //chama próxima função, no caso o create
}

module.exports = TaskValidation;
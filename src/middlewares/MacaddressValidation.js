//Não foi mais necessário, foi retirado macaddress do corpo e colocado como params
/*
const MacaddressValidation = (req, res, next) => {
    //Se não existir o macaddress
    if (!req.body.macaddress) {
        return res.status(400).json({ error: 'macaddress é obrigatório!' });
    } else {
        next();
    }
};

module.exports = MacaddressValidation;
*/
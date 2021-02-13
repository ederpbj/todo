const mongoose = require('../config/databese');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: { type: String, required: true },
    type: { type: Number, require: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    when: { type: Date, required: true },
    done: { type: Boolean, default: false }, //campo não obrigatório
    created: { type: Date, default: Date.now() } //campo não obrigatório
});

module.exports = mongoose.model('Task', TaskSchema);
const express = require('express');
const server = express();

server.use(express.json()); //informa que envia e recebe formato json do server

server.listen(3001, () => {
    console.log('API ONLINE');
})

const TaskRoutes = require('./routes/TaskRoutes')

server.use('/task', TaskRoutes); //colocar Routes no servidor

/*
server.get('/teste', (req, res) => {
    res.send('MUDEI A API!');
})
*/
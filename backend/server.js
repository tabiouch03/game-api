// Chargement des package node et de d'app.js
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(3000);


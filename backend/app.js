// Import du module express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/game');
const userRoutes = require('./routes/user');

const app = express();
// Connexion a la base de donné MongoDB
mongoose.connect('mongodb+srv://tabiouch:sanchez0311@cluster0-wtqox.mongodb.net/api',
{ useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => {console.log(err);
})

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Toutes les routes seront precedé d'api
app.use('/api/game', gameRoutes);
app.use('/api/user', userRoutes);

// Export de l'application
module.exports = app;


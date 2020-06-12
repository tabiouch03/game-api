// Import du module express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/game');

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

// Toutes les routes seront precedé d'api
app.use('/api/game', gameRoutes);

// Export de l'application
module.exports = app;


const Game = require('../models/Game');

exports.createGame = (req, res) => {
  const gameBody = req.body;
  const game = new Game({
    ...gameBody
  });
  game.save().then(() => {
    res.status(201).json({
      message: "Le jeu a bien etait enregistrer"
    }).catch(error => {
      res.status(400).json({
        message: "Une erreur est survenue" + error
      });
    });
  });
}

exports.getGame = (req, res) => {
  Game.find().then(game => {
    res.status(200).json(game);
  }).catch(error => {
    res.status(400).json(error);
  })
}

exports.getGameById = (req, res) => {
  Game.findById(req.params.id).then(game => {
    res.status(200).json(game);
  }).catch(err => {
    res.status(400).json(err);
  });
}

exports.updateGameById = (req, res) => {
  Game.findByIdAndUpdate(req.params.id, {...req.body}).then(() => {
    res.status(201).json({
      message: "Le jeu a eté mis a jour !"
    })
  }).catch(err => {
    res.status(400).json(err)
  })
}

exports.deleteGame = (req, res) => {
  Game.findByIdAndDelete(req.params.id).then(() => {
    res.status(201).json({
      message: "Le jeu a eté supprimer !"
    })
  }).catch(error => {
    res.status(400).json(err)
  })
}

const User = require('../models/User');

exports.createUser = (req, res) => {
  const userBody = req.body;
  const user = new User({
    ...userBody
  });
  user.save().then(() => {
    res.status(201).json({
      message: "L'utilisateur a bien été creer !"
    }).catch(error => {
      res.status(400).json({
        message: "Une erreur est survenue" + error
      });
    });
  });
}

exports.getUser = (req, res) => {
  User.find().then(user => {
    res.status(200).json(user);
  }).catch(error => {
    res.status(400).json(error);
  })
}

exports.getUserById = (req, res) => {
  User.findById(req.params.id).then(user => {
    res.status(200).json(user);
  }).catch(err => {
    res.status(400).json(err);
  });
}

exports.updateUserById = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {...req.body}).then(() => {
    res.status(201).json({
      message: "L'utilisateur a eté mis a jour !"
    })
  }).catch(err => {
    res.status(400).json(err)
  })
}

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => {
    res.status(201).json({
      message: "L'utilisateur a eté supprimer !"
    })
  }).catch(error => {
    res.status(400).json(err)
  })
}

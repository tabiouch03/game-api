const express = require('express');
const gameController = require('../controllers/game');

const router = express.Router();

router.delete('/:id', gameController.deleteGame);
router.put('/:id', gameController.updateGameById);
router.get('/:id', gameController.getGameById);
router.post('/', gameController.createGame);
router.get('/', gameController.getGame);

module.exports = router;
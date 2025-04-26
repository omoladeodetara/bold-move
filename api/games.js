const express = require('express');
const router = express.Router();
const { createGame, joinGame } = require('../services/gameService');

// Create a new game
router.post('/', async (req, res) => {
    const { hostId, rounds, scoringRules } = req.body;
    const result = await createGame(hostId, rounds, scoringRules);
    res.status(201).json(result);
});

// Join an existing game
router.post('/:gameId/players', async (req, res) => {
    const { gameId } = req.params;
    const { playerId, specialization } = req.body;
    const result = await joinGame(gameId, playerId, specialization);
    res.status(200).json(result);
});

module.exports = router;

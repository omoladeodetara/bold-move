const { v4: uuidv4 } = require('uuid');
const db = require('../models/db');

async function createGame(hostId, rounds, scoringRules) {
    const gameId = `game-${uuidv4()}`;
    const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const websocketUrl = `wss://api.boldmove.live/events/${gameId}`;

    await db.query('INSERT INTO games (id, host_id, rounds, scoring_rules) VALUES ($1, $2, $3, $4)', [
        gameId, hostId, rounds, scoringRules
    ]);

    return { gameId, inviteCode, websocketUrl };
}

async function joinGame(gameId, playerId, specialization) {
    const maxPlayers = 8;
    const playerCount = await db.query('SELECT COUNT(*) FROM players WHERE game_id = $1', [gameId]);

    if (playerCount.rows[0].count >= maxPlayers) {
        throw new Error('Maximum player count reached');
    }

    await db.query('INSERT INTO players (game_id, player_id, specialization) VALUES ($1, $2, $3)', [
        gameId, playerId, specialization
    ]);

    return { message: 'Player joined successfully' };
}

module.exports = { createGame, joinGame };

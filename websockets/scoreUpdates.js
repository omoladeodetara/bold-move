const WebSocket = require('ws');

function broadcastScoreUpdate(wss, gameId, leaderboard) {
    const message = {
        type: 'score_update',
        gameId,
        leaderboard,
    };

    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

module.exports = { broadcastScoreUpdate };

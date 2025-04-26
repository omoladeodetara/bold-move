import React, { useState } from 'react';

const PlayerLobby = () => {
    const [gameCode, setGameCode] = useState('');
    const [isReady, setIsReady] = useState(false);

    return (
        <div className="player-lobby">
            <h1>Player Lobby</h1>
            <div>
                <label>Game Code:</label>
                <input
                    type="text"
                    value={gameCode}
                    onChange={(e) => setGameCode(e.target.value)}
                    placeholder="Enter game code"
                />
            </div>
            <div>
                <button onClick={() => setIsReady(!isReady)}>
                    {isReady ? 'Ready' : 'Not Ready'}
                </button>
            </div>
        </div>
    );
};

export default PlayerLobby;

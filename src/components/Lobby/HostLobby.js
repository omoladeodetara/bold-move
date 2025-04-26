import React, { useState } from 'react';

const HostLobby = () => {
    const [gameType, setGameType] = useState('Market Cap');
    const [rounds, setRounds] = useState(5);
    const [maxPlayers, setMaxPlayers] = useState(4);

    return (
        <div className="host-lobby">
            <h1>Host Lobby</h1>
            <div>
                <label>Game Type:</label>
                <select value={gameType} onChange={(e) => setGameType(e.target.value)}>
                    <option value="Market Cap">Market Cap</option>
                    <option value="Net Worth">Net Worth</option>
                </select>
            </div>
            <div>
                <label>Rounds:</label>
                <input
                    type="range"
                    min="3"
                    max="10"
                    value={rounds}
                    onChange={(e) => setRounds(e.target.value)}
                />
                <span>{rounds}</span>
            </div>
            <div>
                <label>Max Players:</label>
                <input
                    type="number"
                    min="4"
                    max="8"
                    value={maxPlayers}
                    onChange={(e) => setMaxPlayers(e.target.value)}
                />
            </div>
        </div>
    );
};

export default HostLobby;

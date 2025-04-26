import React from 'react';
import HostLobby from './components/Lobby/HostLobby';
import PlayerLobby from './components/Lobby/PlayerLobby';

function App() {
    return (
        <div className="App">
            {/* ...existing code... */}
            <HostLobby />
            <PlayerLobby />
            {/* ...existing code... */}
        </div>
    );
}

export default App;

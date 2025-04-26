# Market Minds

## Overview
Market Minds is a multiplayer game that combines financial prediction, psychological strategy, and real-time interaction. Players compete to make accurate guesses about financial entities while engaging in strategic gameplay elements like bluffing and double-down wagers.

## Features
- **Pre-Game Lobby System**: Hosts can configure game settings, and players can join using a game code.
- **In-Game Interfaces**: Real-time feedback, host-controlled rounds, and player guess submissions.
- **Post-Game Analytics**: Detailed performance breakdowns and leaderboards.
- **Scoring Engine**: Configurable rules for accuracy bonuses, penalties, and psychological multipliers.

## Technical Architecture
- **Frontend**: React-based UI with components for Host and Player Lobbies.
- **Backend**: Node.js API with PostgreSQL for data storage.
- **WebSocket Integration**: Real-time updates for score changes and game events.
- **Database Schema**: Tables for games, players, and guesses.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/market-minds.git
   ```
2. Navigate to the project directory:
   ```bash
   cd market-minds
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Update `models/db.js` with your PostgreSQL credentials.
   - Run the schema script:
     ```bash
     psql -U your_username -d market_minds -f models/schema.sql
     ```
5. Start the server:
   ```bash
   npm start
   ```

## Usage
- **Host a Game**: Use the Host Lobby to configure game settings and start a session.
- **Join a Game**: Enter the game code in the Player Lobby to participate.
- **Gameplay**: Submit guesses, react to host clues, and aim for the highest score.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Project Structure
```
api-doc.md
func-doc.md
README.md
api/
	games.js
docs/
	API Design for the _Market Minds_ Game Concept.md
	Figma UI Architecture for _Market Minds_ Game.md
	User Interface Architecture for _Market Minds_.md
models/
	db.js
	schema.sql
services/
	gameService.js
src/
	App.js
	components/
		Lobby/
			HostLobby.js
			PlayerLobby.js
	styles/
		Lobby.css
websockets/
	scoreUpdates.js
```
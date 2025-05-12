# Bold Move

Bold Move is a multiplayer game that combines financial prediction, psychological strategy, and real-time interaction. Players compete to make accurate guesses about financial entities while engaging in strategic gameplay elements like bluffing and double-down wagers.

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
   git clone https://github.com/your-username/Market.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Market
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Update `models/db.js` with your PostgreSQL credentials.
   - Run the schema script:
     ```bash
     psql -U your_username -d bold-move -f models/schema.sql
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

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Project Structure
```
.
├── LICENSE
├── package.json
├── README.md
├── api
│   └── games.js
├── docs
│   ├── API Design for the _Bold Move_ Game Concept.md
│   ├── api-doc.md
│   ├── Figma UI Architecture for _Bold Move_ Game.md
│   ├── func-doc.md
│   └── User Interface Architecture for _Bold Move_.md
├── models
│   ├── db.js
│   └── schema.sql
├── services
│   └── gameService.js
├── src
│   ├── App.js
│   ├── components
│   │   └── Lobby
│   │       ├── HostLobby.js
│   │       └── PlayerLobby.js
│   └── styles
│       └── Lobby.css
└── websockets
    └── scoreUpdates.js
```

## To-Do

### General Improvements
- [x] **Enhance User Experience**:
  - [ ] Add animations and transitions to improve UI interactivity.
  - [ ] Implement accessibility features (e.g., keyboard navigation, screen reader support).
- [ ] **Improve Game Analytics**:
  - [ ] Provide more detailed insights into player performance.
  - [ ] Add visualizations like charts for better data representation.
- [ ] **Mobile Optimization**:
  - [ ] Ensure the game is fully responsive and optimized for mobile devices.
- [ ] **Localization**:
  - [ ] Add support for multiple languages to reach a broader audience.
- [ ] **AI Integration**:
  - [ ] Use AI to provide personalized tips or feedback to players based on their gameplay.

### Future Estimation Feature
- [ ] **Feature Overview**:
  - [ ] Allow players to estimate future values (e.g., market caps, net worth) based on historical data and trends.
  - [ ] Introduce a "Future Estimation Mode" where players can make predictions for a specific time horizon (e.g., 1 year, 5 years).
- [ ] **Implementation Ideas**:
  - [ ] **Historical Data Integration**:
    - [ ] Use APIs (e.g., Yahoo Finance, Alpha Vantage) to fetch historical financial data.
  - [ ] **Trend Analysis**:
    - [ ] Implement algorithms like linear regression or time-series analysis (e.g., ARIMA) to project future values.
  - [ ] **Interactive Graphs**:
    - [ ] Add interactive charts where players can visualize trends and make informed estimates.
  - [ ] **Scoring Mechanism**:
    - [ ] Reward players based on the accuracy of their future estimates compared to actual outcomes.
- [ ] **Gamification**:
  - [ ] Introduce challenges or achievements for accurate long-term estimates.
  - [ ] Add a leaderboard for "Future Estimation Experts."

### Additional Ideas
- [ ] **Custom Game Modes**:
  - [ ] Allow hosts to create custom rules or scenarios for unique gameplay experiences.
- [ ] **Social Features**:
  - [ ] Add chat functionality or forums for players to discuss strategies.
- [ ] **AI Opponents**:
  - [ ] Introduce AI players for single-player or mixed multiplayer modes.
- [ ] **Educational Mode**:
  - [ ] Provide an educational mode where players can learn about financial concepts while playing.
- [ ] **Blockchain Integration**:
  - [ ] Use blockchain for secure transactions or to introduce NFTs as rewards for achievements.
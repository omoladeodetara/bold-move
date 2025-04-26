CREATE TABLE games (
    id VARCHAR(36) PRIMARY KEY,
    host_id VARCHAR(24),
    rounds INT,
    scoring_rules JSONB
);

CREATE TABLE players (
    game_id VARCHAR(36) REFERENCES games(id),
    player_id VARCHAR(24),
    specialization VARCHAR(50),
    PRIMARY KEY (game_id, player_id)
);

CREATE TABLE guesses (
    game_id VARCHAR(36) REFERENCES games(id),
    player_id VARCHAR(24),
    entity_id VARCHAR(24),
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    value NUMERIC,
    is_double_down BOOLEAN,
    PRIMARY KEY (game_id, player_id, entity_id)
);

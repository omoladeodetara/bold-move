# Market


## Figma UI Architecture for "Bold Move" Game

This document outlines the Figma-based UI architecture for the "Bold Move" game. It provides a detailed breakdown of the core screen taxonomy, flow design, and technical implementation strategies. The goal is to create an engaging and intuitive user experience that balances financial seriousness with gamified elements.

### Core Screen Taxonomy & Flow Design

#### 1. Pre-Game Lobby System

- **Host View**: Game Type Selection, Player Capacity Settings
- **Participant View**: Code Entry, Avatar Customization, Readiness Checklist

#### 2. In-Game Interfaces

- **Host Control Dashboard**: Entity Selection, Context Delivery, Reaction Orchestrator
- **Player Guess Interface**: Input Matrix, Context Display
- **Real-Time Feedback Layer**: Guess Proximity Heatmap, Multiplayer Sync

#### 3. Post-Game Analytics

- **Individual Performance Breakdown**: Radar Chart, Bluff Analysis
- **Social Comparison Tools**: Leaderboard Matrix, Shareable Content

---

## User Interface Architecture for "Bold Move"

### Core UI Requirements & Flow Analysis

#### 1. Pre-Game Lobby System

- **Host Interface**: Game Type Selection, Player Capacity Settings
- **Player Interface**: Code Entry, Profile Setup, Readiness Check

#### 2. In-Game Interfaces

- **Host Control Dashboard**: Entity Selection, Context Delivery, Reaction System
- **Player Interaction Layers**: Input Panel, Context Display, Psychological Elements

#### 3. Post-Game Analysis & Progression

- **Results Breakdown**: Individual Report, Comparative Analytics
- **Reward & Progression**: Unlockables, Social Features

---

## API Design for the "Bold Move" Game Concept

### Core API Requirements Analysis

#### 1. Game Session Management

- **Game Initialization**: `POST /games`
- **Player Joining**: `POST /games/{gameId}/players`

#### 2. Entity Selection & Context Management

- **Entity Database**: `GET /entities`
- **Host Context Delivery**: WebSocket Event

#### 3. Guess Submission & Validation

- **Player Guess Endpoint**: `POST /games/{gameId}/guesses`
- **Guess Storage Schema**: PostgreSQL table for guesses

#### 4. Scoring Engine Implementation

- **Scoring Algorithm**: Calculates score based on accuracy and penalties
- **Score Broadcast**: WebSocket Event

#### 5. Host Control API

- **Game Flow Management**: `POST /games/{gameId}/rounds/next`
- **Bluff & Reaction System**: `POST /games/{gameId}/reactions`

---

## Technical Implementation Guidelines

### State Management Architecture

Defines the game state, including phases, players, host, and market data.

### Cross-Platform Considerations

- **Mobile**: One-handed thumb zones
- **Desktop**: Multitasking support
- **Console**: Controller navigation
- **VR**: Spatial HUD

### Security & Compliance

- **Financial Data Handling**: SEC-compliant disclaimer flows
- **Player Protection**: Psychological stress indicators

---

## Evolution Roadmap

### Phase 2 Features

1. **AI Host Mode**: GPT-4 powered context generation
2. **Market Simulation**: Live equity stake system
3. **Augmented Reality**: Physical cash stack visualization

This architecture balances financial seriousness with gamified elements, leveraging Figma's capabilities, RESTful APIs, and real-time multiplayer interactions.




# Figma UI Architecture for "Bold Move" Game


## Introduction

This document outlines the Figma-based UI architecture for the "Bold Move" game. It provides a detailed breakdown of the core screen taxonomy, flow design, and technical implementation strategies. The goal is to create an engaging and intuitive user experience that balances financial seriousness with gamified elements.

---

## Core Screen Taxonomy \& Flow Design

### 1. **Pre-Game Lobby System**

#### 1.1 Lobby Creation (Host View)

- **Frame 1**: Game Type Selection
    - Toggle between Market Cap/Net Worth modes with dynamic financial chart backgrounds
    - Rule configuration panel with sliding scales for accuracy thresholds (+/- 5% bonus ranges)
- **Frame 2**: Player Capacity Settings
    - Circular progress indicator showing joined/specialized players
    - Category specialization assignment through drag-and-drop role cards


#### 1.2 Player Joining (Participant View)

- **Frame 1**: Code Entry \& Avatar Customization
    - Animated input field with currency symbol morphing (💵→💎)
    - 3D avatar builder with financial-themed accessories (bull horns, portfolio tablets)
- **Frame 2**: Readiness Checklist
    - Live player grid with hover-expand specialization tooltips
    - Tactile "Ready" button triggering particle confetti on all clients

---

### 2. **In-Game Interfaces**

#### 2.1 Host Control Dashboard

- **Module 1**: Entity Selection Panel
    - Search-as-you-type with live API results from Yahoo Finance/Forbes
    - Risk meter visualizing entity volatility using candlestick previews
- **Module 2**: Context Delivery System
    - AI-generated clue suggestions (LLM API integration) with truthfulness slider
    - Historical event timeline showing mergers/acquisitions as interactive nodes
- **Module 3**: Reaction Orchestrator
    - Radial menu of preset phrases ("Bold Move!") with intensity gradients
    - Custom bluff log tracking deception frequency per player


#### 2.2 Player Guess Interface

- **Input Matrix**:
    - Dual-axis slider for logarithmic value selection (1M-10T range)
    - Confidence dial affecting score multipliers with haptic feedback states
- **Context Display**:
    - Expandable news carousel showing related Bloomberg headlines
    - Host reaction history visualized as emotional waveform graph


#### 2.3 Real-Time Feedback Layer

- **Visual Systems**:
    - Guess proximity heatmap using color-coded radial gradients
    - Player prediction arcs showing guess distributions vs actual value
- **Multiplayer Sync**:
    - Figma's incremental frame loading for smooth state transitions
    - Collision detection preventing UI element overlap during rapid inputs

---

### 3. **Post-Game Analytics**

#### 3.1 Individual Performance Breakdown

- **Radar Chart**: Accuracy across company sizes/industries
- **Bluff Analysis**: Deception success rate vs host reaction correlation
- **Reward Unlock Animation**: Themed decks materializing with particle effects


#### 3.2 Social Comparison Tools

- **Leaderboard Matrix**:
    - Skill-based matchmaking (SBMM) tier indicators
    - Rivalry timelines showing head-to-head guess histories
- **Shareable Content**:
    - Auto-generated meme templates with player stats overlay
    - Exportable accuracy reports in Bloomberg Terminal style

---

## Technical Implementation in Figma

### 4. **Component Architecture**

```figma  
// Master Game Button Component  
const GameButton = ({  
  variant: 'primary' | 'secondary',  // Determines the button style (primary or secondary)
  financialTheme: 'bull' | 'bear',  // Sets the theme to 'bull' (positive) or 'bear' (negative)
  interactionType: 'guess' | 'bluff'  // Defines the interaction type (guess or bluff)
}) => (  
  <AutoLayout  
    cornerRadius={8}  // Rounds the corners of the button
    fill={getThemeGradient(variant)}  // Applies a gradient background based on the variant
    stroke={financialTheme === 'bull' ? '#2ECC71' : '#E74C3C'}  // Sets the border color based on the theme
  >  
    <Text  
      characterStyle={getInteractionTypography(interactionType)}  // Applies typography based on interaction type
      effect={interactionType === 'bluff' ? 'neonPulse' : null}  // Adds a neon pulse effect for 'bluff' interaction
    />  
  </AutoLayout>  
);  
```
- Utilizes Figma Variants for 83 button states
- Implements interactive components for hover/click animations

---

### 5. **Multiplayer Sync Strategy**

| Feature | Figma Technique | Optimizations |
| :-- | :-- | :-- |
| Real-Time Guesses | Multiplayer cursors with chat | Incremental frame loading |
| Host Control Sync | Component overrides | Predictive entity pre-caching |
| Score Updates | Live embed prototypes | Differential state patches |
| Reaction Broadcast | WebSocket plugins | Emotion detection compression |

---

### 6. **Performance Considerations**

- **Mobile Optimization**:
    - Simplified guess input using financial notation shortcuts (1.2B = 1.2×10⁹)
    - GPU-accelerated particle effects with LOD adjustments
- **Memory Management**:
    - Asset purging after round completion
    - Dynamic component unloading for idle players

---

## Phase 2 Evolution Roadmap

### 7. **Advanced UI Systems**

1. **AI Host Mode**:
    - GPT-4 powered reaction generator with emotional intelligence scoring
    - Dynamic difficulty adjustment based on player biometrics
2. **Augmented Trading Floor**:
    - WebGL-powered 3D stock ticker visualization
    - Spatial audio integration for "floor chatter" ambiance
3. **Regulatory Compliance**:
    - SEC disclaimer flows with interactive quiz gates
    - Real-time value masking for restricted jurisdictions

---

This UI architecture leverages Figma's multiplayer capabilities while adhering to financial UX best practices, using:

1. **Figma Auto-Layout** for responsive guess input panels
2. **Interactive Components** for host reaction presets
3. **Community Plugins** like Looper for particle effects
4. **Incremental Loading** to handle 10k+ entity databases

Key screens should be prototyped with click-through flows demonstrating:

- Host deception sequence (clue delivery → reaction → score impact)
- Player double-down wagering with risk/reward visualization
- Cross-platform responsiveness from mobile to desktop AR

# 


# User Interface Architecture for "Bold Move"

## Core UI Requirements \& Flow Analysis

### 1. **Pre-Game Lobby System**

#### 1.1 Lobby Creation \& Joining

- **Host Interface**:
    - **Screen 1**: Game Type Selection 
        - Dropdown for "Market Cap" vs "Net Worth" modes
        - Toggle for rule configurations (Double Down activation, Bluffing Bonuses)
    - **Screen 2**: Player Capacity Settings
        - Slider for rounds (3-10)
        - Max player selector (4-8) with specialization category assignments
- **Player Interface**:
    - **Screen 1**: Code Entry \& Profile Setup
        - Input field for game codes with validation
        - Avatar customization (financial-themed icons: bull/bear mascots, portfolio icons)
    - **Screen 2**: Readiness Check
        - Real-time player list with specialization indicators
        - "Ready" button with color-coded status


#### 1.2 Contextual Preparation

- **Host Tools**:
    - Entity database browser with live API integration (Yahoo Finance/Forbes)
    - Auto-suggested context clues panel powered by LLM API
- **Player Preview**:
    - Historical accuracy stats display
    - Specialization-specific tutorial popups (e.g., "Tech Startups 101")

---

### 2. **In-Game Interfaces**

#### 2.1 Host Control Dashboard

- **Primary Components**:
    - **Module 1**: Entity Selection
        - Searchable dropdown with market cap/net worth filters
        - "Randomize" button with weighted category options
    - **Module 2**: Context Delivery
        - Text editor with AI-suggested phrases (tone slider: Neutral/Deceptive)
        - Historical event timeline integration (e.g., "Post-\$5B acquisition")
    - **Module 3**: Reaction System
        - Preset buttons ("Bold Move!", "Ballpark!") with intensity sliders
        - Custom phrase input with cooldown timer


#### 2.2 Player Interaction Layers

- **Core Gameplay UI**:
    - **Input Panel**:
        - Numeric keypad with scientific notation support (e.g., 1.2B)
        - Confidence meter (1-5 stars) affecting scoring multipliers
    - **Context Display**:
        - Expandable hint window with related news snippets
        - Visual timeline of host-provided clues
- **Psychological Elements**:
    - Opponent guess heatmap (anonymous accuracy zones)
    - Host reaction history log with timing analysis


#### 2.3 Real-Time Feedback Systems

- **Visual Indicators**:
    - Radial progress bar for turn timer
    - Color-shifting background based on guess accuracy proximity
- **Audio-Visual Juicing**:
    - Haptic feedback on mobile for "Bold Move" calls
    - Particle effects on Double Down wagers (gold coin showers)

---

### 3. **Post-Game Analysis \& Progression**

#### 3.1 Results Breakdown

- **Individual Report**:
    - Accuracy spider chart across categories
    - Psychological influence score (host reactions triggered)
    - "Best Bluff" highlight reel
- **Comparative Analytics**:
    - Leaderboard with skill-based matchmaking (SBMM) metrics
    - Deviation graphs showing guess distribution vs actual values


#### 3.2 Reward \& Progression

- **Unlockables**:
    - Themed decks (e.g., "Unicorn Startups Pack")
    - Reaction phrase bundles ("Wall Street Lingo")
- **Social Features**:
    - Shareable infographics with meme templates
    - Direct challenge system with historical rivalry tracking

---

### 4. **Advanced UI Systems**

#### 4.1 Adaptive Layout Engine

- **Resolution Handling**:
    - Dynamic grid rearrangement for mobile/desktop
    - Contextual UI hiding during input phases (e.g., guess submission)
- **Performance Optimization**:
    - WebGL fallback for low-end devices
    - Asset streaming prioritization (critical UI first)


#### 4.2 Accessibility Suite

- **Customization Panel**:
    - Color blindness filters with preview modes
    - Input remapping for motor-impaired users
- **Assistive Technologies**:
    - AI narrator for visual elements
    - Haptic grid navigation for blind players

---

### 5. **Admin \& Moderation Tools**

#### 5.1 Host Privileges

- **Game Flow Controls**:
    - Pause/Resume with reason logging
    - Vote override system for disputed rounds
- **Anti-Cheat Measures**:
    - Guess pattern analysis dashboard
    - Session watermarks for streamers


#### 5.2 Data Visualization

- **Economy Monitor**:
    - Real-time valuation accuracy heatmap
    - Player psychology metrics (reaction impact scores)
- **Live Ops Console**:
    - Dynamic difficulty adjustment sliders
    - Event scheduler (e.g., "IPO Week" bonuses)

---

## Technical Implementation Guidelines

### 6. **State Management Architecture**

```typescript  
interface GameState {  
  phase: 'lobby' | 'context' | 'guessing' | 'scoring';  
  players: Map<PlayerID, {  
    guesses: number[];  
    score: number;  
    specialization: string;  
    status: 'active' | 'eliminated';  
  }>;  
  host: {  
    currentEntity: FinancialProfile;  
    contextHistory: string[];  
    reactionsUsed: Map<ReactionType, number>;  
  };  
  marketData: {  
    actualValue: number;  
    volatility: number; // Affects scoring modifiers  
  };  
}  
```

- **Optimization**:
    - Differential sync for score updates
    - Entity pre-caching during lobby phase

---

### 7. **Cross-Platform Considerations**

| Platform | UI Priority | Technical Adaptation |
| :-- | :-- | :-- |
| **Mobile** | One-handed thumb zones | Radial number input with haptics |
| **Desktop** | Multitasking support | Detachable analyst panel |
| **Console** | Controller navigation | Radial menus with HD rumble |
| **VR** | Spatial HUD | Floating number pad with gaze select |

---

### 8. **Security \& Compliance**

- **Financial Data Handling**:
    - SEC-compliant disclaimer flows
    - Real-time value masking for regulated markets
- **Player Protection**:
    - Psychological stress indicators
    - Session cool-down timers

---

## Evolution Roadmap

### Phase 2 Features (Post-MVP)

1. **AI Host Mode**:
    - GPT-4 powered context generation
    - Emotional intelligence scoring for reactions
2. **Market Simulation**:
    - Live equity stake system
    - Short-selling mechanics with risk meters
3. **Augmented Reality**:
    - Physical cash stack visualization
    - Geo-located CEO net worth challenges

This UI architecture balances financial seriousness with gameified elements, using psychological nudges through visual hierarchy (e.g., red dominance in penalty warnings) and spatial tension in countdown timers. The layered approach allows gradual complexity revelation, preventing cognitive overload during critical guessing phases.


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Figma UI Architecture for "Market Minds" Game

---

## Introduction

This document outlines the Figma-based UI architecture for the "Market Minds" game. It provides a detailed breakdown of the core screen taxonomy, flow design, and technical implementation strategies. The goal is to create an engaging and intuitive user experience that balances financial seriousness with gamified elements.

---

## Core Screen Taxonomy \& Flow Design

### 1. **Pre-Game Lobby System**

#### 1.1 Lobby Creation (Host View)

- **Frame 1**: Game Type Selection
    - Toggle between Market Cap/Net Worth modes with dynamic financial chart backgrounds[^15]
    - Rule configuration panel with sliding scales for accuracy thresholds (+/- 5% bonus ranges)[^12]
- **Frame 2**: Player Capacity Settings
    - Circular progress indicator showing joined/specialized players[^1]
    - Category specialization assignment through drag-and-drop role cards[^5]


#### 1.2 Player Joining (Participant View)

- **Frame 1**: Code Entry \& Avatar Customization
    - Animated input field with currency symbol morphing (💵→💎)[^2]
    - 3D avatar builder with financial-themed accessories (bull horns, portfolio tablets)[^13]
- **Frame 2**: Readiness Checklist
    - Live player grid with hover-expand specialization tooltips[^15]
    - Tactile "Ready" button triggering particle confetti on all clients[^12]

---

### 2. **In-Game Interfaces**

#### 2.1 Host Control Dashboard

- **Module 1**: Entity Selection Panel
    - Search-as-you-type with live API results from Yahoo Finance/Forbes[^4]
    - Risk meter visualizing entity volatility using candlestick previews[^10]
- **Module 2**: Context Delivery System
    - AI-generated clue suggestions (Perplexity API integration) with truthfulness slider[^4]
    - Historical event timeline showing mergers/acquisitions as interactive nodes[^6]
- **Module 3**: Reaction Orchestrator
    - Radial menu of preset phrases ("Bold Move!") with intensity gradients[^2]
    - Custom bluff log tracking deception frequency per player[^17]


#### 2.2 Player Guess Interface

- **Input Matrix**:
    - Dual-axis slider for logarithmic value selection (1M-10T range)[^15]
    - Confidence dial affecting score multipliers with haptic feedback states[^3]
- **Context Display**:
    - Expandable news carousel showing related Bloomberg headlines[^4]
    - Host reaction history visualized as emotional waveform graph[^13]


#### 2.3 Real-Time Feedback Layer

- **Visual Systems**:
    - Guess proximity heatmap using color-coded radial gradients[^10]
    - Player prediction arcs showing guess distributions vs actual value[^5]
- **Multiplayer Sync**:
    - Figma's incremental frame loading for smooth state transitions[^9]
    - Collision detection preventing UI element overlap during rapid inputs[^4]

---

### 3. **Post-Game Analytics**

#### 3.1 Individual Performance Breakdown

- **Radar Chart**: Accuracy across company sizes/industries[^12]
- **Bluff Analysis**: Deception success rate vs host reaction correlation[^17]
- **Reward Unlock Animation**: Themed decks materializing with particle effects[^15]


#### 3.2 Social Comparison Tools

- **Leaderboard Matrix**:
    - Skill-based matchmaking (SBMM) tier indicators[^5]
    - Rivalry timelines showing head-to-head guess histories[^13]
- **Shareable Content**:
    - Auto-generated meme templates with player stats overlay[^6]
    - Exportable accuracy reports in Bloomberg Terminal style[^10]

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
- Utilizes Figma Variants for 83 button states[^12]
- Implements interactive components for hover/click animations[^12]

---

### 5. **Multiplayer Sync Strategy**

| Feature | Figma Technique | Optimizations |
| :-- | :-- | :-- |
| Real-Time Guesses | Multiplayer cursors with chat[^4] | Incremental frame loading[^9] |
| Host Control Sync | Component overrides[^12] | Predictive entity pre-caching |
| Score Updates | Live embed prototypes[^13] | Differential state patches |
| Reaction Broadcast | WebSocket plugins[^17] | Emotion detection compression |

---

### 6. **Performance Considerations**

- **Mobile Optimization**:
    - Simplified guess input using financial notation shortcuts (1.2B = 1.2×10⁹)[^15]
    - GPU-accelerated particle effects with LOD adjustments[^9]
- **Memory Management**:
    - Asset purging after round completion[^9]
    - Dynamic component unloading for idle players[^4]

---

## Phase 2 Evolution Roadmap

### 7. **Advanced UI Systems**

1. **AI Host Mode**:
    - GPT-4 powered reaction generator with emotional intelligence scoring[^4]
    - Dynamic difficulty adjustment based on player biometrics[^17]
2. **Augmented Trading Floor**:
    - WebGL-powered 3D stock ticker visualization[^13]
    - Spatial audio integration for "floor chatter" ambiance[^3]
3. **Regulatory Compliance**:
    - SEC disclaimer flows with interactive quiz gates[^12]
    - Real-time value masking for restricted jurisdictions[^4]

---

This UI architecture leverages Figma's multiplayer capabilities[^4] while adhering to financial UX best practices, using:

1. **Figma Auto-Layout** for responsive guess input panels[^2]
2. **Interactive Components** for host reaction presets[^12]
3. **Community Plugins** like Looper for particle effects[^12]
4. **Incremental Loading** to handle 10k+ entity databases[^9]

Key screens should be prototyped with click-through flows demonstrating:

- Host deception sequence (clue delivery → reaction → score impact)
- Player double-down wagering with risk/reward visualization
- Cross-platform responsiveness from mobile to desktop AR[^15]

<div style="text-align: center">⁂</div>

[^1]: https://dribbble.com/tags/game-lobby

[^2]: https://www.youtube.com/watch?v=N0hsiUSVupc

[^3]: https://www.youtube.com/watch?v=kqjKsvIBF_4

[^4]: https://www.figma.com/blog/how-figma-draws-inspiration-from-the-gaming-world/

[^5]: https://dribbble.com/search/lobby-game-design

[^6]: https://www.whatupgames.com/blog/design-an-interactive-game-ui-with-figma

[^7]: https://forum.figma.com/suggest-a-feature-11/split-screen-16172

[^8]: https://www.figma.com/community/tag/game ui

[^9]: https://www.figma.com/blog/incremental-frame-loading/

[^10]: https://www.figma.com/community/file/1010436560444270188/game-ui

[^11]: https://www.figma.com/community/tag/game

[^12]: https://designcode.io/figma-handbook-onboarding-screen/

[^13]: https://www.figma.com/community/file/1315926829972915037/ui-ux-design-game-website-game-tracje

[^14]: https://www.figma.com/community/tag/game ui/files

[^15]: https://www.figma.com/community/file/1218047087211924367/mobile-game-lobby-screen-ui

[^16]: https://www.figma.com/community/tag/game/files

[^17]: https://www.figma.com/community/tag/multiplayer/files

[^18]: https://www.figma.com/community/file/1029770312828230812/game-lobby-animation

[^19]: https://www.figma.com/community/tag/lobby/files

[^20]: https://www.youtube.com/watch?v=Z47WGKK4I9M

[^21]: https://www.pinterest.com/pin/how-to-create-a-battle-royale-lobby-ui-screen-in-figma-figma-uiux-gameui-casualgames-digitalart--843228730258345992/

[^22]: https://www.figma.com/community/tag/game ui

[^23]: https://www.figma.com/community/tag/game ui/files

[^24]: https://www.figma.com/community/file/1266460049820110989/gaming-console-ui-design-practice

[^25]: https://www.figma.com/community/file/1010436560444270188/game-ui

[^26]: https://www.figma.com/community/file/1077088027743886301/tutorial-sample-project-design-an-interactive-game-ui-with-figma

[^27]: https://www.figma.com/community/file/1288804025168455103/parchment-system-game-ui

[^28]: https://www.figma.com/community/file/1270807135521711172/dansy-nft-game-ui

[^29]: https://www.figma.com/community/file/1411086505726583515/the-finals-template-design-system

[^30]: https://www.reddit.com/r/SoloDevelopment/comments/14zuuff/i_use_figma_for_a_lot_of_my_game_ui_elements_what/

[^31]: https://www.figma.com/community/tag/multiplayer/files

[^32]: https://www.figma.com/community/tag/game design/files

[^33]: https://www.youtube.com/watch?v=kqjKsvIBF_4

[^34]: https://www.figma.com/community/tag/multiplayer


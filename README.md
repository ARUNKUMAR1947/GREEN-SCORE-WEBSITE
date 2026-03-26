# GreenScore - Personal Sustainability Tracker

GreenScore is a polished React + Tailwind CSS web application that helps users log daily environmental habits and calculate a Green Score out of 100. It is designed to be beginner-friendly, visually attractive, and suitable for college demos, sustainability presentations, and Environmental Science projects.

## Project Folder Structure

```text
green app/
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- README.md
`-- src/
    |-- App.jsx
    |-- index.css
    |-- main.jsx
    |-- components/
    |   |-- ActivityForm.jsx
    |   |-- AlertsPanel.jsx
    |   |-- BadgesPanel.jsx
    |   |-- DashboardSection.jsx
    |   |-- HeroSection.jsx
    |   |-- MonthlyProgressChart.jsx
    |   |-- Navbar.jsx
    |   |-- ProfileStats.jsx
    |   |-- SDGSection.jsx
    |   |-- ScoreRing.jsx
    |   |-- StreakCard.jsx
    |   |-- SuggestionsPanel.jsx
    |   |-- SummaryCard.jsx
    |   `-- TrendChart.jsx
    |-- data/
    |   `-- mockData.js
    `-- utils/
        `-- scoring.js
```

## Package Dependencies

- `react`
- `react-dom`
- `recharts`
- `lucide-react`
- `vite`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `@vitejs/plugin-react`

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Main Features

- Daily activity tracker for water, electricity, transport, and waste
- Green Score calculator with performance classification
- Weekly and monthly Recharts dashboards
- Dynamic sustainability suggestions
- Alerts for high-impact habits
- Badge system and streak tracking
- SDG relevance section for academic presentation
- Light and dark mode

## Green Score Formula

Green Score starts at `100` and subtracts penalties for unsustainable behavior:

```text
Green Score = 100
  - waterPenalty
  - electricityPenalty
  - wastePenalty
  - transportPenalty
  + habitBonus
```

### Penalty logic

- Water above efficient daily targets reduces the score
- Higher electricity consumption reduces the score
- More waste generated reduces the score
- Transport mode applies fixed impact penalties:
  - `car = 22`
  - `bus = 10`
  - `bike = 3`
  - `walking = 0`

### Bonus logic

- Low water use
- Low electricity use
- Low waste
- Walking or cycling

### Score classification

- `75-100`: Eco-friendly
- `50-74`: Moderate
- `0-49`: Harmful

The formula is implemented in `src/utils/scoring.js` so it can be adjusted easily later.

## Example Data

```json
{
  "water": 120,
  "electricity": 6,
  "transport": "bike",
  "waste": 0.5
}
```

Mock historical data for 30 days is stored in `src/data/mockData.js`.

## SDG Relevance

GreenScore supports:

- **SDG 12: Responsible Consumption and Production**
- **SDG 13: Climate Action**
- **SDG 11: Sustainable Cities and Communities**

## Backend and Database Extension Ideas

The current version is fully functional using local state and browser local storage, which keeps the architecture simple for demos.

To extend it later:

1. Add a backend with `Node.js + Express` or `Flask`
2. Create APIs for user authentication and daily activity submission
3. Connect Firebase or MongoDB for saved history and cloud sync
4. Add login, team challenges, and sustainability leaderboards

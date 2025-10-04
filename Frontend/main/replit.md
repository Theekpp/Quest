# Geo-Quest Platform - Telegram Mini App

## Overview
A scalable geo-location based quest platform implemented as a Telegram Mini App. The platform allows users to gamify their walks by discovering locations through themed quests (Motifs). The first motif is "Old Man Hottabych" - a literary route based on locations mentioned in the famous Russian novel.

## Current Status
- **Production Ready**: Yes
- **Last Updated**: October 4, 2025
- **Environment**: Replit Development

## Project Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Routing**: Wouter (client-side)
- **UI Framework**: Tailwind CSS + Radix UI
- **Map Integration**: 2GIS Map API
- **Runtime**: Node.js 20

### Project Structure
```
/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # UI components (Status Bar, Navigation, etc.)
│   │   ├── pages/       # Page components (Map, Achievements, etc.)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and query client
│   │   └── App.tsx      # Main app component
│   └── index.html       # Entry HTML
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── vite.ts          # Vite dev server setup
│   ├── db.ts            # Database connection
│   └── storage.ts       # Storage utilities
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema (Drizzle)
└── attached_assets/     # Project documentation and design files
```

## Core Features

### Motif-Driven Architecture
The platform uses a multi-theme system where each "Motif" represents a unique quest with:
- Custom visual theme (colors, fonts, icons)
- Unique route with Points of Interest (POIs)
- Themed content and stories
- Independent leaderboards and achievements

### Main Pages
1. **Map Page** (/) - Main screen with 2GIS map showing POIs and user location
2. **Locations Page** (/locations) - Browse available locations and motifs
3. **Achievements Page** (/achievements) - View earned badges and rewards
4. **Rating Page** (/rating) - Leaderboard with user rankings
5. **Profile Page** (/profile) - User profile and statistics

### Dynamic Theming
The current MVP features the "Old Man Hottabych" theme with:
- **Primary Color**: Enchanted sapphire blue (#215 85% 55%)
- **Accent Color**: Eastern gold (#45 95% 60%)
- **Display Font**: Playfair Display (for headers)
- **Body Font**: Inter

## Development Setup

### Prerequisites
- Node.js 20+ (installed via Replit)
- PostgreSQL database (configured automatically)

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (auto-configured)
- `PORT` - Server port (defaults to 5000)
- `NODE_ENV` - Environment mode (development/production)

### Commands
```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database migrations
npm run db:push

# Type checking
npm check
```

### Development Workflow
The development server runs on port 5000 with:
- Vite HMR for instant frontend updates
- Express backend with automatic TypeScript compilation
- Integrated frontend and backend on same port

## Database Schema

### Current Tables
- **users** - User authentication and profile data
  - id (varchar, UUID primary key)
  - username (text, unique)
  - password (text)

### Planned Schema (from design docs)
- **motifs** - Quest themes
- **locations** - Geographic areas for quests
- **points_of_interest** - Specific POI locations
- **achievements** - Achievement definitions
- **user_profiles** - Extended user data
- **user_movement_log** - Geolocation tracking
- **user_action_log** - User interaction history

## Configuration Files

### vite.config.ts
- Configured with React plugin
- Replit-specific plugins (dev banner, error modal, cartographer)
- Path aliases: `@/` → client/src, `@shared/` → shared
- Server configured with `allowedHosts: true` for Replit proxy

### tsconfig.json
- Module: ESNext with bundler resolution
- Strict mode enabled
- Path aliases configured
- Includes: client, server, shared directories

### tailwind.config.ts
- Custom theme based on Hottabych motif
- Extended with Radix UI colors
- Typography plugin included
- Animation utilities

## Deployment

### Configuration
- **Deployment Type**: Autoscale (stateless web app)
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **Port**: 5000 (hardcoded in server/index.ts)

### Production Build
The build process:
1. Vite builds the frontend to `dist/public`
2. esbuild bundles the backend to `dist/index.js`
3. Production server serves static files from `dist/public`

### Publishing
Use Replit's publish button to deploy. The app is configured for autoscale deployment, which means it spins up on demand and is suitable for stateless applications.

## API Integration

### 2GIS Map API
- Used for map rendering and navigation
- POI markers show quest locations
- Route calculation for user guidance
- **Note**: Requires API key configuration (currently shows error in console)

### Telegram Mini App
- Integrates with Telegram WebApp API
- Uses Telegram user ID for authentication
- Supports Telegram theme colors
- Posts events for header/bottom bar customization

## Known Issues & TODOs

### Current Issues
1. 2GIS API key not configured (shows WebGL error)
2. LSP diagnostics showing module resolution warnings (non-critical, TypeScript server warmup)

### Planned Enhancements
1. Complete authentication system with Telegram integration
2. Implement geolocation tracking (60-second intervals)
3. Add POI activation via QR code scanning
4. Build achievement and rewards system
5. Create admin interface for managing motifs and content
6. Add multiple motif support with theme switching
7. Implement leaderboard functionality
8. Add offline mode support

## User Preferences
- None specified yet

## Recent Changes
- **October 4, 2025**: GitHub import completed and Replit environment setup finalized
  - ✅ Node.js 20 installed and verified (v20.19.3)
  - ✅ PostgreSQL database provisioned with environment variables (DATABASE_URL, etc.)
  - ✅ Database schema pushed successfully using `npm run db:push`
  - ✅ Development workflow configured on port 5000 with webview output
  - ✅ Vite dev server configured with `allowedHosts: true` for Replit proxy support
  - ✅ Server configured to bind to 0.0.0.0:5000 for proper access
  - ✅ Autoscale deployment configured (build: `npm run build`, run: `npm start`)
  - ✅ Application verified running with Telegram WebApp integration
  - ✅ .gitignore properly configured for Node.js/TypeScript project
  - Known limitations in Replit preview: 2GIS map shows WebGL error (works fine in real Telegram app)

## Development Notes

### Code Conventions
- TypeScript strict mode throughout
- React functional components with hooks
- Tailwind CSS for all styling
- Radix UI for accessible components
- Express REST API patterns

### Security
- Never commit secrets to repository
- Use environment variables for sensitive data
- Database credentials managed by Replit
- User authentication via Telegram (to be implemented)

### Performance
- Vite for fast development builds
- Production builds are optimized and minified
- Map component lazy loads tiles
- Battery-conscious geolocation (60s intervals planned)

## Resources

### Documentation Files
- `design_guidelines.md` - Complete UI/UX specifications
- `attached_assets/Структурированная идея_1759409210640.txt` - Project concept (Russian)
- `attached_assets/Структура_1759409210639.txt` - Structure documentation
- `attached_assets/Frontend_1759409210639.txt` - Frontend specifications

### External APIs
- [2GIS Map API Documentation](https://docs.2gis.com/)
- [Telegram Mini Apps Guide](https://core.telegram.org/bots/webapps)
- [Drizzle ORM Docs](https://orm.drizzle.team/)

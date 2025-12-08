# Aestruct Inc. - AI-Powered Tools Platform

## Overview
This is a React-based web application showcasing AI-powered tools for the entertainment industry. The application uses Google's Gemini API to power interactive AI features and provides teaser demonstrations of various production tools.

**Current State**: Fully functional React + TypeScript + Vite application running on Replit with Gemini AI integration.

## Recent Changes
- **December 8, 2024**: Initial GitHub import setup for Replit environment
  - Configured Vite dev server to run on port 5000 with host allowance for Replit proxy
  - Installed Node.js 20 and all project dependencies
  - Set up GEMINI_API_KEY secret for AI features
  - Created workflow for frontend development server

## Project Architecture

### Technology Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router DOM v7 (HashRouter)
- **AI Integration**: Google Gemini API (@google/genai)
- **Icons**: Lucide React
- **Styling**: Custom CSS with responsive design

### Project Structure
```
/
├── components/          # Reusable React components
│   ├── Button.tsx
│   ├── CookieConsent.tsx
│   ├── ErrorBoundary.tsx
│   ├── Layout.tsx
│   ├── TeaserModal.tsx
│   └── ToolCard.tsx
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ToolDetail.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ProductContact.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfUse.tsx
│   └── CookiePolicy.tsx
├── services/           # API services
│   └── geminiService.ts
├── hooks/              # Custom React hooks
│   └── usePageSEO.ts
├── public/             # Static assets
│   ├── assets/
│   │   └── demos/     # AI tool demo markdown files
│   └── *.html         # Fallback HTML pages
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
├── constants.tsx      # App constants and tool definitions
├── types.ts           # TypeScript type definitions
└── vite.config.ts     # Vite configuration
```

### Key Features
1. **AI Tool Teasers**: Interactive demos powered by Gemini AI
2. **Product Showcase**: Detailed information about 8 AI-powered tools
3. **Responsive Design**: Mobile-friendly interface
4. **SEO Optimization**: Dynamic metadata and fallback pages
5. **Cookie Consent**: GDPR-compliant cookie management
6. **Error Handling**: Error boundaries for graceful failure recovery

### Environment Variables
- `GEMINI_API_KEY`: Required secret for Google Gemini API access

### Development Server
- **Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows external access)
- **Allowed Hosts**: Enabled for Replit proxy compatibility

### Available AI Tools
1. Script Analyst Pro - Screenplay analysis
2. Budget Forecast Pro - Production budget forecasting
3. Pitch Deck Optimizer Pro - Pitch deck enhancement
4. Trend Scout - Industry trend analysis
5. Content Calendar Pro - Content planning
6. Rights Clearance Pro - Legal clearance management
7. Product Document Generator Pro - Documentation automation
8. AI Tool Recommender - Tool recommendation engine

## Running the Application

### Development
The application runs automatically via the configured workflow:
```bash
npm run dev
```
Access the application through the Replit webview at port 5000.

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Dependencies

### Production
- react & react-dom: ^19.2.0
- react-router-dom: ^7.9.6
- @google/genai: ^1.30.0
- lucide-react: ^0.554.0

### Development
- vite: ^6.2.0
- @vitejs/plugin-react: ^5.0.0
- typescript: ~5.8.2
- @types/node: ^22.14.0

## Notes
- Uses HashRouter for client-side routing compatibility
- Vite configured to inject GEMINI_API_KEY at build time
- Path alias '@/' configured for cleaner imports
- ErrorBoundary wraps all routes for error resilience

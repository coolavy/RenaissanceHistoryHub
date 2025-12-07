# Renaissance: Rights & Responsibilities - National History Day 2025

## Overview

This is an educational web application created for National History Day 2025, exploring the Renaissance era (1300-1600) through the theme "Rights & Responsibilities in History." The project examines how Renaissance-era developments in art, science, politics, and culture shaped modern concepts of individual rights and social responsibilities.

The application features interactive timelines, gallery exhibits, primary source analysis, and thematic explorations connecting Renaissance achievements to contemporary questions about intellectual freedom, artistic expression, civic duty, and institutional power.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. All routes are defined in `client/src/App.tsx` with paths including:
- Home (`/`)
- Timeline (`/timeline`)
- Rights & Responsibilities (`/rights-responsibilities`)
- Gallery (`/gallery`)
- Why It Fits NHD (`/why-it-fits`)
- Bibliography (`/bibliography`)

**UI Component Library**: Shadcn/ui components (Radix UI primitives) with the "new-york" style variant. Components are located in `client/src/components/ui/` and use a custom design system with Renaissance-inspired theming.

**Styling**: Tailwind CSS with custom configuration for Renaissance aesthetics. The design system uses:
- Serif fonts (Playfair Display) for headings and scholarly content
- Sans-serif fonts (Inter) for body text
- Custom color palette inspired by Renaissance art (warm golds, rich burgundies, classical blues)
- Spacing system based on Tailwind's default scale

**State Management**: TanStack Query (React Query) for server state management, with query client configured in `client/src/lib/queryClient.ts`. Currently set up for future API integration but using static data.

**Theme System**: Custom light/dark theme provider with Renaissance-appropriate color schemes, stored in localStorage.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, serving both API routes and static assets.

**Development Mode**: Uses Vite middleware for hot module replacement (HMR) in development. The server dynamically serves the Vite dev server when `NODE_ENV=development`.

**Production Mode**: Serves pre-built static files from `dist/public` directory.

**API Structure**: Placeholder routes defined in `server/routes.ts` with `/api` prefix. Currently minimal as the application uses static content data.

**Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for user management. This provides a foundation for future database integration while keeping the codebase flexible.

### Data Model

**Content Schemas**: Zod schemas defined in `shared/schema.ts` for type-safe data structures:
- `TimelineEvent`: Historical events with year, description, category, and connections to rights/responsibilities
- `GalleryItem`: Artworks and artifacts with descriptions and theme connections
- `PrimarySource`: Historical documents with original text, translations, and analysis

**Type Safety**: TypeScript types are inferred from Zod schemas using `z.infer<>`, ensuring consistency between runtime validation and compile-time type checking.

**Data Location**: Currently hardcoded in page components as constant arrays. This architectural choice prioritizes content development speed for the educational project while maintaining the schema structure for potential future database migration.

### Build System

**Client Build**: Vite bundles the React application with TypeScript compilation, CSS processing (PostCSS + Tailwind), and asset optimization.

**Server Build**: esbuild bundles the Express server into a single CommonJS file (`dist/index.cjs`). Selected dependencies are bundled (allowlist in `script/build.ts`) to optimize cold start times by reducing filesystem syscalls.

**Build Script**: Custom build orchestration in `script/build.ts` that:
1. Cleans the `dist` directory
2. Builds the client with Vite
3. Bundles the server with esbuild
4. Handles external dependencies appropriately

### External Dependencies

**UI Framework**: 
- React 18+ ecosystem (react, react-dom)
- Radix UI primitives for accessible component foundation
- Shadcn/ui component patterns

**Styling & Design**:
- Tailwind CSS for utility-first styling
- PostCSS for CSS processing
- Custom fonts loaded from Google Fonts (Playfair Display, Inter)

**Data Management**:
- TanStack Query for async state management
- Zod for schema validation and TypeScript type inference
- drizzle-orm and drizzle-zod for database ORM (configured but not actively used)

**Development Tools**:
- Vite for fast development and optimized builds
- esbuild for server bundling
- TypeScript for type safety across the stack
- Replit-specific plugins for development experience

**Database** (configured but not required):
- PostgreSQL support via drizzle-kit configuration
- Connection string expected in `DATABASE_URL` environment variable
- Schema defined in `shared/schema.ts` but currently using in-memory storage

**Note**: The application is architected to work without a database for the educational content showcase, but includes the infrastructure to add database persistence for user-generated content or administrative features in the future.
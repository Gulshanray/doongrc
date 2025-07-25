# SP GRC and Handicrafts Website

## Overview

This is a full-stack web application for SP GRC and Handicrafts, a company specializing in Glass Reinforced Concrete (GRC) and Glass Fiber Reinforced Concrete (GFRC) products. The application serves as a company showcase website with product catalogs, testimonials, contact forms, and a gallery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and dark mode support
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: In-memory storage implementation for rapid prototyping
- **Session Management**: PostgreSQL-based session storage

### Build and Development Setup
- **Development Mode**: Vite dev server with HMR and Express API proxy
- **Production Build**: Vite builds frontend, esbuild bundles backend
- **TypeScript**: Shared types between frontend and backend via `shared/` directory
- **Replit Integration**: Special handling for Replit development environment

## Key Components

### Data Models
- **Users**: Basic user authentication schema
- **Products**: GRC product catalog with categories, ratings, and featured flags
- **Testimonials**: Customer reviews with approval workflow
- **Contact Submissions**: Inquiry form submissions with product/service selection

### API Endpoints
- `GET /api/products` - Retrieve all products
- `GET /api/products/featured` - Get featured products for homepage
- `GET /api/products/category/:category` - Filter products by category
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit new testimonial (requires approval)
- `POST /api/contact` - Submit contact form inquiry

### Frontend Pages
- **Home**: Hero section, featured products, testimonials, and contact form
- **About**: Company story and team information
- **Products**: Complete product catalog with category filtering
- **Gallery**: Image gallery with category-based filtering
- **Contact**: Contact information and inquiry form

### UI Components
- Responsive navigation with mobile menu
- Product cards with ratings and category badges
- Testimonial cards with star ratings
- Contact and testimonial forms with validation
- Footer with newsletter signup and company links

## Data Flow

1. **Page Load**: React Query fetches initial data from Express API endpoints
2. **User Interactions**: Form submissions trigger API calls with optimistic updates
3. **Data Storage**: Drizzle ORM handles database operations with type safety
4. **Real-time Updates**: React Query automatically refetches and updates UI state

## External Dependencies

### Frontend Dependencies
- **UI Components**: Comprehensive set of Radix UI primitives
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries
- **Validation**: Zod for runtime type validation

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Shared Zod schemas between frontend and backend

### Development Tools
- **Replit Plugins**: Special Vite plugins for Replit development experience
- **Error Handling**: Runtime error overlay for development

## Deployment Strategy

### Development
- Vite dev server proxies API requests to Express backend
- Hot module replacement for rapid frontend development
- In-memory storage for quick prototyping without database setup

### Production
- Frontend builds to static assets served by Express
- Backend bundles to single ESM file with external dependencies
- Environment variables configure database connections
- Database migrations managed via Drizzle Kit

### Database Management
- Schema defined in `shared/schema.ts` with Drizzle ORM
- Migrations stored in `migrations/` directory
- Database push command for development schema updates
- PostgreSQL session storage for production authentication

The application follows a modern full-stack TypeScript architecture with strong type safety between frontend and backend, optimized for both development experience and production performance.
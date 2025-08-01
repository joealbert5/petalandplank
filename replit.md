# Petal & Plank

## Overview

Petal & Plank is a modern full-stack web application built with React and Express, designed as a home design and interior decorating platform. The application features a sophisticated UI built with shadcn/ui components and Tailwind CSS, providing users with an elegant interface for exploring home design services. The platform includes contact forms, service showcases, and appears to be focused on connecting users with interior design professionals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built using React with TypeScript and follows a component-based architecture:

- **React Router**: Uses Wouter for lightweight client-side routing
- **UI Framework**: Implements shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for brand colors (sage, warm-taupe, terracotta, etc.)
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with validation
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a clean structure with separation of concerns between pages, components, and utility functions. The UI design emphasizes accessibility and responsive design patterns.

### Backend Architecture

The server-side is built with Express.js and TypeScript:

- **Framework**: Express.js with middleware for JSON parsing and request logging
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Uses connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot reloading with tsx and custom Vite integration
- **Deployment**: ESBuild for production bundling

The backend implements a modular storage interface pattern, allowing for easy switching between different storage implementations (currently includes in-memory storage for development).

### Data Storage Solutions

- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM provides type-safe database operations and migrations
- **Schema**: Centralized schema definitions in the shared directory for type consistency
- **Migrations**: Automated database migrations through Drizzle Kit

The current schema includes user management with username/password authentication.

### Authentication and Authorization

The application implements a basic user authentication system:

- **User Model**: Username and password-based authentication
- **Validation**: Zod schemas for type-safe input validation
- **Session Storage**: PostgreSQL-backed sessions for persistent login state

### External Dependencies

- **Database**: Neon serverless PostgreSQL for cloud database hosting
- **UI Components**: Radix UI primitives for accessible component foundations
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific plugins for development environment integration
- **Carousel**: Embla Carousel for image/content carousels
- **Date Handling**: date-fns for date manipulation utilities

The application is optimized for deployment on Replit with specific configurations for the platform's development environment.
# Overview

Clickers is an Egyptian digital agency portfolio website built as a full-stack web application. The project showcases the agency's expertise in storytelling, education technology, and custom software development. It features a modern, responsive design with sections for company information, project showcases, services, blog content, and a contact form for lead generation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using modern React with TypeScript, featuring a component-based architecture using React functional components and hooks. The application uses Wouter for lightweight client-side routing and TanStack Query for efficient data fetching and state management. The UI is built with shadcn/ui components on top of Radix UI primitives, providing accessible and customizable design system components.

The styling approach combines Tailwind CSS for utility-first styling with CSS custom properties for theming. The design system includes comprehensive color schemes, typography scales, and spacing variables that support both light and dark themes through CSS variables.

## Backend Architecture
The server follows an Express.js architecture with TypeScript, implementing a RESTful API design. The application uses a modular approach with separate route handlers and storage abstractions. Currently implemented with an in-memory storage system for development, but architected to easily swap to persistent database storage.

The server includes middleware for request logging, JSON parsing, and error handling. The API endpoints follow RESTful conventions with proper HTTP status codes and structured JSON responses.

## Data Storage Solutions
The application uses Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript. The database schema includes tables for users and contact submissions with proper foreign key relationships and constraints. The current implementation includes both in-memory storage for development and production-ready PostgreSQL schema definitions.

Database migrations are managed through Drizzle Kit, providing version control for schema changes. The storage layer uses an interface-based design allowing for easy switching between storage implementations.

## Form Handling and Validation
Form management is handled through React Hook Form with Zod schema validation, ensuring type safety and consistent validation rules between client and server. The contact form includes comprehensive validation for email formats, required fields, and message length constraints.

## Development and Build Tools
The project uses Vite as the build tool and development server, providing fast hot module replacement and optimized production builds. TypeScript configuration includes path mapping for clean imports and strict type checking. The build process compiles both client and server code with appropriate bundling strategies.

ESBuild is used for server-side bundling in production, while Vite handles client-side optimization including code splitting and asset optimization.

# External Dependencies

## UI and Design System
- **Radix UI**: Provides unstyled, accessible component primitives for complex UI components like dialogs, dropdowns, and form controls
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent styling and accessibility features
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with built-in responsive design utilities
- **Lucide React**: Icon library providing consistent, customizable SVG icons

## Data Management
- **TanStack Query**: Advanced data fetching and caching library for server state management, providing optimistic updates and background synchronization
- **React Hook Form**: Performant form library with minimal re-renders and comprehensive validation support
- **Zod**: TypeScript-first schema validation library ensuring type safety across client and server boundaries

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with excellent TypeScript integration and migration support
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments
- **Drizzle Kit**: CLI tool for database migrations and schema management

## Development Tools
- **Vite**: Modern build tool providing fast development server and optimized production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing for Tailwind CSS compilation and optimization

## Routing and Navigation
- **Wouter**: Minimalist client-side routing library providing declarative routing without the complexity of larger routing solutions

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions, providing persistent session storage

## Fonts and Typography
- **Google Fonts**: External font loading for Inter, DM Sans, Architects Daughter, Fira Code, and Geist Mono font families providing comprehensive typography options
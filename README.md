# Valentelligent AI Landing Page

A modern, responsive landing page showcasing AI solutions and services with interactive components and elegant animations.

## Project Overview

### Description
Valentelligent AI is a sophisticated landing page designed to showcase AI services and solutions. It features a modern, responsive layout with interactive components, smooth animations, and a comprehensive service showcase.

### Key Features
- 🎨 Animated hero section with gradient effects
- 🔄 Sticky navigation with smooth scroll
- 💡 Interactive AI demo with chat interface
- 📊 Dynamic service calculator
- 📱 Fully responsive design
- 🎭 Animated components with Framer Motion
- 📝 Blog/resources section
- 🎯 Case studies carousel
- 📬 Contact form with validation

### Tech Stack
- **React** - Frontend framework
- **Shadcn UI** - Component library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Express** - Backend server
- **TypeScript** - Type safety
- **Zod** - Schema validation

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development Server
```bash
# Start the development server
npm run dev
```
The server will start on port 5000. Visit `http://localhost:5000` to view the application.

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Shadcn UI components
│   │   │   └── ...        # Feature components
│   │   ├── lib/           # Utilities and animations
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Application entry
├── server/
│   ├── routes.ts          # API routes
│   └── index.ts           # Server setup
```

### Component Organization
- `components/ui/`: Reusable UI components from Shadcn
- `components/*.tsx`: Feature-specific components
- `lib/`: Shared utilities and animations
- `pages/`: Page-level components

### Routing
The application uses `wouter` for client-side routing, configured in `main.tsx`:
```typescript
<Switch>
  <Route path="/" component={Home} />
  <Route>404 Page Not Found</Route>
</Switch>
```

## Customization Guide

### Modifying Components
Components are built using Shadcn UI and can be customized through:
1. Tailwind classes
2. Component props
3. Component composition

Example:
```typescript
<Card className="custom-class">
  <CardHeader>
    <CardTitle>Custom Title</CardTitle>
  </CardHeader>
</Card>
```

### Styling with Tailwind CSS
Custom styles are defined in `index.css`:
```css
@layer components {
  .container {
    @apply px-4 md:px-6 lg:px-8 mx-auto;
  }
  
  .section-padding {
    @apply py-12 md:py-16 lg:py-20;
  }
}
```

### Animation Customization
Animations are defined in `lib/animations.ts`:
```typescript
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
```

### Adding New Sections
1. Create component in `components/`
2. Add animations using Framer Motion
3. Import and add to `pages/Home.tsx`

## Component Documentation

### Hero Section
```typescript
<Hero />
```
Props: None
Features:
- Animated headline
- Gradient text effects
- Responsive layout
- Call-to-action buttons

### Service Calculator
```typescript
<ServiceCalculator />
```
Props: None
Features:
- Real-time cost estimation
- Interactive form controls
- Dynamic pricing calculation
- Premium options toggle

### AI Demo
```typescript
<AIDemo />
```
Props: None
Features:
- Interactive chat interface
- Pre-configured prompts
- Simulated responses
- Real-time animations

## Design System

### Color Scheme
Colors are defined in `index.css`:
```css
:root {
  --background: 240 20% 98%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262.1 83.3% 57.8%;
  --secondary: 240 10% 97%;
  /* ... other colors */
}
```

### Typography
- Headings: `text-3xl md:text-4xl font-bold`
- Body: `text-base text-muted-foreground`
- Navigation: `text-sm font-medium`

### Spacing
- Container: `px-4 md:px-6 lg:px-8`
- Sections: `py-12 md:py-16 lg:py-20`
- Grid: `gap-4 sm:gap-6 md:gap-8`

## Deployment

### Build Instructions
```bash
# Build the application
npm run build
```

### Environment Configuration
Required environment variables:
```env
NODE_ENV=production
PORT=5000
```

### Deployment Steps
1. Build the application
2. Set environment variables
3. Start the server:
```bash
npm run start
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## License
MIT License

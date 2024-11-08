# Valentelligent AI Developer Guide 🚀

> 📚 **Start Here:** New to the project? Make sure to read [README.md](README.md) first!

## Table of Contents 📑

1. [Project Structure](#project-structure)
2. [Component Guide](#component-guide)
3. [Styling Guide](#styling-guide)
4. [Development Patterns](#development-patterns)
5. [Troubleshooting](#troubleshooting)
6. [Best Practices](#best-practices)

## Project Structure 🏗️

```
📁 Your Workspace
├── 📁 client/               # Frontend
│   ├── 📁 src/             # Source code
│   │   ├── 📁 components/  # UI components
│   │   ├── 📁 lib/        # Utilities
│   │   └── 📁 pages/      # Page layouts
└── 📁 server/              # Backend
```

## Component Guide 🎨

### Core Components

1. **Header & Navigation**
   ```jsx
   <Header className="sticky-nav">
     <Navigation items={menuItems} />
   </Header>
   ```

2. **AI Demo Interface**
   ```jsx
   <AIDemo>
     <ChatInterface prompts={demoPrompts} />
   </AIDemo>
   ```

3. **Service Calculator**
   ```jsx
   <ServiceCalculator>
     <PricingForm onSubmit={calculatePrice} />
   </ServiceCalculator>
   ```

### Styling System

1. **Tailwind Utilities**
   ```jsx
   className="gradient-text hover:scale-105 transition-all"
   ```

2. **Animations**
   ```jsx
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
   >
   ```

## Development Patterns 🔄

### State Management

```jsx
// Local State
const [isOpen, setIsOpen] = useState(false);

// Forms
const form = useForm({
  defaultValues: {
    service: "ml",
    volume: 100
  }
});
```

### Performance Optimization

1. **Code Splitting**
   ```jsx
   const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
   ```

2. **Image Optimization**
   > 🔗 See detailed guide in [IMAGES_GUIDE.md](client/src/components/IMAGES_GUIDE.md)

## Troubleshooting 🔧

### Common Issues

1. **Styles Not Working**
   - Check Tailwind classes
   - Verify component imports
   - Check for CSS conflicts

2. **Performance Issues**
   - Implement lazy loading
   - Optimize images
   - Use production builds

## Best Practices 📝

1. **Component Structure**
   ```jsx
   export default function Feature({ title, description }) {
     return (
       <Card>
         <CardTitle>{title}</CardTitle>
         <CardContent>{description}</CardContent>
       </Card>
     );
   }
   ```

2. **Form Handling**
   ```jsx
   const form = useForm({
     resolver: zodResolver(schema)
   });
   ```

3. **Animation Guidelines**
   ```jsx
   <motion.div
     variants={fadeIn}
     initial="hidden"
     animate="visible"
   >
   ```

## Next Steps 🎯

- Check [IMAGES_GUIDE.md](client/src/components/IMAGES_GUIDE.md) for image optimization
- Review component documentation
- Join our community Discord

Remember: Code quality and performance are our top priorities! 💪

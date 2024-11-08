# Image Implementation Guide for Valentelligent AI

## Supported Image Formats
- SVG (Preferred for icons and illustrations)
- WebP (Recommended for photos)
- PNG (Fallback for WebP)
- JPEG/JPG (For photographs)

## Image Size Specifications

### Hero Section Images
- Desktop: 1200x800px
- Tablet: 800x600px
- Mobile: 400x300px
- Format: WebP with PNG fallback
- Max file size: 200KB

### Feature Cards
- Size: 600x400px
- Icon size: 48x48px
- Format: SVG preferred for icons
- Max file size: 100KB

### Blog Post Images
- Thumbnail: 400x300px
- Header: 1200x630px
- Format: WebP
- Max file size: 150KB

### Case Study Images
- Size: 800x600px
- Format: WebP/PNG
- Max file size: 180KB

## Implementation Examples

### Adding Hero Image
```jsx
<div className="relative w-full aspect-video">
  <Image
    src="/images/hero.webp"
    alt="Hero description"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>
```

### Feature Icon Implementation
```jsx
<div className="w-12 h-12 text-primary">
  <YourIconComponent className="w-full h-full" />
</div>
```

## Best Practices
1. Always use descriptive alt text
2. Implement lazy loading for below-fold images
3. Use responsive images with srcset
4. Optimize images before upload
5. Keep SVGs clean and optimized

## Image Optimization Tools
- SVGO for SVG optimization
- ImageOptim for bitmap images
- Squoosh for WebP conversion

## Directory Structure
```
public/
  ├── images/
  │   ├── hero/
  │   ├── features/
  │   ├── blog/
  │   └── case-studies/
  └── icons/
```

## SVG Guidelines
1. Optimize SVGs using SVGO
2. Use currentColor for dynamic coloring
3. Remove unnecessary attributes
4. Keep viewBox attribute
5. Use appropriate size attributes

## Responsive Images
```jsx
<picture>
  <source
    srcSet="/images/hero-desktop.webp"
    media="(min-width: 1024px)"
    type="image/webp"
  />
  <source
    srcSet="/images/hero-mobile.webp"
    type="image/webp"
  />
  <img
    src="/images/hero-fallback.png"
    alt="Description"
    className="w-full h-auto"
  />
</picture>
```

## Common Issues and Solutions
1. Image not displaying
   - Check file path
   - Verify format support
   - Ensure proper dimensions

2. Poor performance
   - Optimize image size
   - Use appropriate format
   - Implement lazy loading

3. SVG color not changing
   - Use currentColor
   - Remove hard-coded colors
   - Check parent color inheritance

Remember: Always optimize images before implementation to maintain performance and visual quality.

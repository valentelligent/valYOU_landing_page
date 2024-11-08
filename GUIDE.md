# Valentelligent AI Landing Page - User Guide

## Introduction

### What is this landing page?
The Valentelligent AI landing page is a modern website that showcases AI-related services and products. It features beautiful animations, interactive sections, and a clean, professional design.

### What can you use it for?
- Promote your AI business or services
- Display your company's AI solutions
- Collect leads through the contact form
- Showcase testimonials and case studies
- Demonstrate AI features through the interactive demo
- Share blog posts and resources
- Calculate service costs for potential clients

### Basic Requirements
- A computer with internet access
- A modern web browser (like Chrome, Firefox, or Safari)
- Basic familiarity with using websites and editing text files

## Getting Started

### Download and Setup

1. Get the Files
   - Visit the project's download page
   - Click the "Download" or "Clone" button
   - Save the files to your computer

2. Install Required Software
   - Download and install Node.js from nodejs.org
   - Choose the "LTS" (Long Term Support) version
   - Follow the installation wizard's instructions

3. Open the Project
   - Open your computer's terminal/command prompt
   - Navigate to the project folder
   - Type `npm install` and press Enter
   - Wait for the installation to complete

4. Start the Website
   - In the terminal, type `npm run dev`
   - Wait for the message "serving on port 5000"
   - Open your web browser
   - Visit `http://localhost:5000`

### Basic Folder Structure (The Important Parts)

```
client/
  ├── src/
  │   ├── components/   (Website sections)
  │   └── index.css     (Colors and styles)
```

## Customization Guide

### Changing Text and Content

1. Open the component files in the `client/src/components` folder
2. Look for text between quotes (" ")
3. Change the text to your desired content
4. Save the file

Example:
```jsx
// Before
<h1>Welcome to Valentelligent AI</h1>

// After
<h1>Welcome to Your Company Name</h1>
```

### Modifying Colors and Styles

1. Open `client/src/index.css`
2. Find the `:root` section at the top
3. Change color values to customize the look

Example colors:
```css
:root {
  --primary: 262.1 83.3% 57.8%;    /* Main color */
  --secondary: 240 4% 96%;         /* Background color */
}
```

### Adding/Removing Sections

1. Open `client/src/pages/Home.tsx`
2. Add or remove components from the list
3. Components are like building blocks - add or remove them as needed

Example:
```jsx
// Remove a section by deleting its line
<Hero />
<Services />
// <Features />  <- Remove this line to hide the Features section
<AIDemo />
```

### Changing Images

1. Add your new images to the `public` folder
2. Open the component file where you want to change the image
3. Update the image path to point to your new image

Example:
```jsx
// Before
<img src="/features/analytics.svg" />

// After
<img src="/your-new-image.jpg" />
```

### Modifying the Contact Form

1. Open `client/src/components/ContactForm.tsx`
2. Change form fields or messages
3. Update validation rules if needed

## Common Tasks

### Updating the Hero Section

1. Open `client/src/components/Hero.tsx`
2. Change the main heading, subtext, and button labels
3. Modify the background colors or layout

Example changes:
```jsx
// Change the main heading
<h1>Your New Headline Here</h1>

// Update button text
<Button>Start Now</Button>
```

### Modifying Service Cards

1. Open `client/src/components/Services.tsx`
2. Find the `services` array
3. Add, remove, or modify service items

Example:
```jsx
const services = [
  {
    title: "Your New Service",
    description: "Description of your service",
    icon: Star
  }
];
```

### Changing Testimonials

1. Open `client/src/components/Testimonials.tsx`
2. Locate the testimonials array
3. Update with your own customer testimonials

Example:
```jsx
const testimonials = [
  {
    name: "Customer Name",
    role: "Company Position",
    content: "Their testimonial message"
  }
];
```

### Updating the Blog Section

1. Open `client/src/components/Blog.tsx`
2. Find the `blogPosts` array
3. Add or update blog post entries

Example:
```jsx
const blogPosts = [
  {
    title: "Your Blog Post Title",
    description: "Short description of the post",
    date: "November 8, 2024"
  }
];
```

### Modifying the Calculator

1. Open `client/src/components/ServiceCalculator.tsx`
2. Update pricing and options
3. Modify calculation logic if needed

Example:
```jsx
const basePrice = {
  basic: 500,    // Change prices
  premium: 1000,
  enterprise: 2000
};
```

## Troubleshooting

### Common Issues and Solutions

1. Website Not Loading
   - Make sure you ran `npm install`
   - Check if the terminal shows any errors
   - Try restarting with `npm run dev`

2. Changes Not Showing Up
   - Save all modified files
   - Refresh your browser
   - Clear browser cache if needed

3. Styling Issues
   - Check for typos in class names
   - Verify color values are correct
   - Make sure all style changes are saved

4. Contact Form Not Working
   - Verify your email settings
   - Check browser console for errors
   - Test with different browsers

### Getting Help

1. Documentation Resources
   - Read the README.md file
   - Check the official documentation
   - Look for examples in the code

2. Community Support
   - Join related forums
   - Ask questions on Stack Overflow
   - Reach out to the developer community

3. Direct Support
   - Contact your website administrator
   - Submit support tickets
   - Email the development team

Remember: Always make a backup before making significant changes!

## Tips for Success

1. Start Small
   - Make one change at a time
   - Test each change before moving on
   - Keep track of what you modified

2. Stay Organized
   - Name files clearly
   - Comment your changes
   - Keep a backup of original files

3. Test Thoroughly
   - Check on different devices
   - Test all interactive features
   - Verify contact form submissions

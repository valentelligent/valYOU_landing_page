import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function initRevealOnScroll() {
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); // Initial check
  
  return () => window.removeEventListener('scroll', reveal);
}

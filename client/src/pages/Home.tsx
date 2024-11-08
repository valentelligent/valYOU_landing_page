import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import AIDemo from "@/components/AIDemo";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import ServiceCalculator from "@/components/ServiceCalculator";
import { initRevealOnScroll } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    const cleanup = initRevealOnScroll();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <ServiceCalculator />
        <CaseStudies />
        <AIDemo />
        <Blog />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
}

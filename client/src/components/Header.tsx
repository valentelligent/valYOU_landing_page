import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold gradient-text cursor-pointer">
            Valentelligent AI
          </span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-2">
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => scrollToSection("services")}
              >
                Services
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => scrollToSection("calculator")}
              >
                Calculator
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => scrollToSection("ai-demo")}
              >
                AI Demo
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => scrollToSection("blog")}
              >
                Blog
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                className="bg-primary/90 hover:bg-primary"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-[64px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg md:hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container px-4 py-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("calculator")}
            >
              Calculator
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("ai-demo")}
            >
              AI Demo
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

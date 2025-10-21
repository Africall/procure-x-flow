import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { session } = useAuth();

  const handleGetStarted = () => {
    navigate(session ? "/app/dashboard" : "/auth");
  };

  const handleSignIn = () => {
    navigate(session ? "/app/dashboard" : "/auth");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ProcureX
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <Button 
              variant="ghost" 
              onClick={handleSignIn}
              aria-label="Sign in to ProcureX"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={handleGetStarted}
              aria-label="Get started with ProcureX"
              data-testid="cta-get-started"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#benefits" className="block text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <div className="space-y-2 pt-4">
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button 
                className="w-full bg-gradient-primary"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

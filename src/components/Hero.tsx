import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Smart Procurement Platform
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Streamline Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Procurement Process
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Intelligent automation, real-time analytics, and seamless supplier management. 
              Transform how your business handles procurement with ProcureX.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">$2M+</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroDashboard}
              alt="ProcureX Dashboard"
              className="relative rounded-2xl shadow-glow w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

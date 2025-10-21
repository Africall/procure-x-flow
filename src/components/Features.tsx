import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Users, Shield, Database, Clock } from "lucide-react";
import automationIcon from "@/assets/feature-automation.jpg";
import analyticsIcon from "@/assets/feature-analytics.jpg";
import suppliersIcon from "@/assets/feature-suppliers.jpg";

const features = [
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Automate repetitive procurement tasks and approval workflows to save time and reduce errors.",
    image: automationIcon,
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Get instant insights into spending patterns, supplier performance, and cost-saving opportunities.",
    image: analyticsIcon,
  },
  {
    icon: Users,
    title: "Supplier Management",
    description: "Centralize supplier information, track performance, and maintain strong vendor relationships.",
    image: suppliersIcon,
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Ensure regulatory compliance and protect sensitive procurement data with enterprise-grade security.",
  },
  {
    icon: Database,
    title: "Smart Cataloging",
    description: "Organize products and services with AI-powered categorization and intelligent search.",
  },
  {
    icon: Clock,
    title: "Faster Processing",
    description: "Reduce procurement cycle times by up to 60% with streamlined workflows and digital approvals.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Optimize Procurement
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to transform your procurement operations from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  {feature.image ? (
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

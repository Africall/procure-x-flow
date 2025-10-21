import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reduce procurement costs by up to 30%",
  "Cut processing time by 60%",
  "Eliminate manual data entry errors",
  "Improve supplier relationships",
  "Gain complete spend visibility",
  "Ensure compliance across all purchases",
  "Scale operations without adding headcount",
  "Make data-driven procurement decisions",
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Why Leading Companies
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Choose ProcureX
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of businesses that have transformed their procurement operations 
              and achieved measurable results with our platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

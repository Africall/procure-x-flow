import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const budgets = [
  {
    name: "IT Department Q1 2025",
    periodStart: "2025-01-01",
    periodEnd: "2025-03-31",
    total: 500000,
    used: 335000,
    remaining: 165000,
    percentage: 67,
  },
  {
    name: "Marketing Q1 2025",
    periodStart: "2025-01-01",
    periodEnd: "2025-03-31",
    total: 300000,
    used: 180000,
    remaining: 120000,
    percentage: 60,
  },
  {
    name: "Administration Q1 2025",
    periodStart: "2025-01-01",
    periodEnd: "2025-03-31",
    total: 200000,
    used: 175000,
    remaining: 25000,
    percentage: 87.5,
  },
];

const Budgets = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold">Budget Management</h1>
        <p className="text-muted-foreground">
          Monitor departmental spending and budget utilization
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => (
          <Card key={budget.name} className="glass-panel">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  <span className="text-base">{budget.name}</span>
                </div>
                {budget.percentage > 80 ? (
                  <TrendingUp className="h-4 w-4 text-destructive" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-green-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Used</span>
                  <span className="font-mono font-medium">
                    KES {budget.used.toLocaleString()}
                  </span>
                </div>
                <Progress value={budget.percentage} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Remaining</span>
                  <span className="font-mono font-medium">
                    KES {budget.remaining.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Budget</span>
                  <span className="font-mono font-bold">
                    KES {budget.total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{budget.periodStart}</span>
                  <span>{budget.periodEnd}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Budgets;

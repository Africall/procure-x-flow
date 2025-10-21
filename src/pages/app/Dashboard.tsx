import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, FileText, Package, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRole } from "@/context/RoleContext";

const Dashboard = () => {
  const { user } = useRole();

  const stats = [
    {
      title: "Open RFQs",
      value: "12",
      icon: FileText,
      description: "Active requests for quotation",
      change: "+3 this week",
    },
    {
      title: "Pending Approvals",
      value: "5",
      icon: ShoppingCart,
      description: "Awaiting your review",
      change: "-2 from last week",
    },
    {
      title: "Active POs",
      value: "28",
      icon: Package,
      description: "Purchase orders in progress",
      change: "+5 this month",
    },
    {
      title: "Budget Utilization",
      value: "67%",
      icon: TrendingUp,
      description: "Current period spend",
      change: "On track",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-heading font-bold">
          Welcome back, {user.name}
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your procurement today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-panel hover:shadow-elevated transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold font-heading">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                  <p className="text-xs text-primary mt-2">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New vendor registered", time: "2 hours ago", type: "success" },
                { action: "PO #1234 approved", time: "5 hours ago", type: "info" },
                { action: "RFQ #567 created", time: "1 day ago", type: "default" },
                { action: "Budget alert triggered", time: "2 days ago", type: "warning" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground mb-4">
              Use the sidebar to navigate or click the + button in the bottom right
              to create new items quickly.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <FileText className="h-5 w-5 mb-2 text-primary" />
                <p className="text-sm font-medium">New RFQ</p>
              </div>
              <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <Package className="h-5 w-5 mb-2 text-primary" />
                <p className="text-sm font-medium">Add Item</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

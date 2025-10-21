import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Package,
  FileText,
  ClipboardList,
  ClipboardCheck,
  Receipt,
  Wallet,
  CheckSquare,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRoleGate } from "@/hooks/useRoleGate";
import type { AppRole } from "@/context/RoleContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  path: string;
  icon: typeof LayoutDashboard;
  allowedRoles: AppRole[];
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/app/dashboard",
    icon: LayoutDashboard,
    allowedRoles: ["Admin", "ProcurementManager", "Approver", "Requester", "Accountant"],
  },
  {
    name: "Vendors",
    path: "/app/vendors",
    icon: Building2,
    allowedRoles: ["Admin", "ProcurementManager"],
  },
  {
    name: "Items",
    path: "/app/items",
    icon: Package,
    allowedRoles: ["Admin", "ProcurementManager"],
  },
  {
    name: "RFQs",
    path: "/app/rfqs",
    icon: FileText,
    allowedRoles: ["Admin", "ProcurementManager", "Requester"],
  },
  {
    name: "Purchase Orders",
    path: "/app/pos",
    icon: ClipboardList,
    allowedRoles: ["Admin", "ProcurementManager"],
  },
  {
    name: "GRN",
    path: "/app/grn",
    icon: ClipboardCheck,
    allowedRoles: ["Admin", "Accountant"],
  },
  {
    name: "Invoices",
    path: "/app/invoices",
    icon: Receipt,
    allowedRoles: ["Admin", "Accountant"],
  },
  {
    name: "Budgets",
    path: "/app/budgets",
    icon: Wallet,
    allowedRoles: ["Admin", "ProcurementManager"],
  },
  {
    name: "Approvals",
    path: "/app/approvals",
    icon: CheckSquare,
    allowedRoles: ["Admin", "Approver"],
  },
  {
    name: "Reports",
    path: "/app/reports",
    icon: BarChart3,
    allowedRoles: ["Admin", "ProcurementManager", "Accountant"],
  },
];

export const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{
        width: collapsed ? 64 : 260,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-40 flex flex-col"
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-heading font-bold text-gradient-primary"
            >
              ProcureX
            </motion.h1>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const hasAccess = useRoleGate(item.allowedRoles);

          if (!hasAccess) return null;

          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start relative overflow-hidden transition-all duration-300",
                    collapsed ? "px-3" : "px-4",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary glow-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full glow-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={cn("h-5 w-5 flex-shrink-0", collapsed ? "" : "mr-3")} />
                  <AnimatePresence mode="wait">
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm font-medium"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
};

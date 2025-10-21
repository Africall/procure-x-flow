import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRole } from "@/context/RoleContext";
import type { AppRole } from "@/context/RoleContext";
import { useState, useEffect } from "react";

export const Topbar = () => {
  const { user, setRole } = useRole();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-card/80 backdrop-blur-lg border-b border-border z-30 flex items-center px-6 gap-4">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search... (Cmd+K)"
            className="pl-9 bg-background/50"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Role Switcher (Dev Tool) */}
        <Select value={user.role} onValueChange={(value) => setRole(value as AppRole)}>
          <SelectTrigger className="w-[180px] bg-background/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="ProcurementManager">Procurement Manager</SelectItem>
            <SelectItem value="Approver">Approver</SelectItem>
            <SelectItem value="Requester">Requester</SelectItem>
            <SelectItem value="Accountant">Accountant</SelectItem>
          </SelectContent>
        </Select>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full animate-glow-pulse" />
        </Button>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* User */}
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.org}</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-white">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
};

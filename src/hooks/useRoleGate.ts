import { useRole } from "@/context/RoleContext";
import type { AppRole } from "@/context/RoleContext";

export function useRoleGate(allowedRoles: AppRole[]): boolean {
  const { user } = useRole();
  
  // SSR-safe: return false if role is not available
  if (typeof window === "undefined" || !user?.role) {
    return false;
  }
  
  return allowedRoles.includes(user.role);
}

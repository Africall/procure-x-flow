import { createContext, useContext, useState, type ReactNode } from "react";

export type AppRole = "Admin" | "ProcurementManager" | "Approver" | "Requester" | "Accountant";

interface UserContext {
  name: string;
  role: AppRole;
  org: string;
}

interface RoleContextValue {
  user: UserContext;
  setRole: (role: AppRole) => void;
}

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContext>({
    name: "James Melwish",
    role: "ProcurementManager",
    org: "Plugins Fiber",
  });

  const setRole = (role: AppRole) => {
    setUser((prev) => ({ ...prev, role }));
  };

  return (
    <RoleContext.Provider value={{ user, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within RoleProvider");
  }
  return context;
};

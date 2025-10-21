import { Outlet } from "react-router-dom";
import { useRole } from "@/context/RoleContext";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { FAB } from "./FAB";

const AppLayout = () => {
  const { user } = useRole();

  // SSR-safe guard
  if (!user?.role) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Topbar />
      
      {/* Main Content */}
      <main className="ml-64 mt-16 p-8 min-h-screen">
        <Outlet />
      </main>

      <FAB />
    </div>
  );
};

export default AppLayout;

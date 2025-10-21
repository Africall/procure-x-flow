import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RoleProvider } from "./context/RoleContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AppLayout from "./components/app/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import Vendors from "./pages/app/Vendors";
import Items from "./pages/app/Items";
import RFQs from "./pages/app/RFQs";
import POs from "./pages/app/POs";
import GRN from "./pages/app/GRN";
import Invoices from "./pages/app/Invoices";
import Budgets from "./pages/app/Budgets";
import Approvals from "./pages/app/Approvals";
import Reports from "./pages/app/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RoleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="vendors" element={<Vendors />} />
              <Route path="items" element={<Items />} />
              <Route path="rfqs" element={<RFQs />} />
              <Route path="pos" element={<POs />} />
              <Route path="grn" element={<GRN />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="budgets" element={<Budgets />} />
              <Route path="approvals" element={<Approvals />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<div className="text-2xl">Settings - Coming Soon</div>} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RoleProvider>
  </QueryClientProvider>
);

export default App;

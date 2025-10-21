import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AppLayout from "./components/app/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import Vendors from "./pages/app/Vendors";
import Items from "./pages/app/Items";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="items" element={<Items />} />
            <Route path="rfqs" element={<div className="text-2xl">RFQs - Coming Soon</div>} />
            <Route path="pos" element={<div className="text-2xl">Purchase Orders - Coming Soon</div>} />
            <Route path="grn" element={<div className="text-2xl">GRN - Coming Soon</div>} />
            <Route path="invoices" element={<div className="text-2xl">Invoices - Coming Soon</div>} />
            <Route path="approvals" element={<div className="text-2xl">Approvals - Coming Soon</div>} />
            <Route path="budgets" element={<div className="text-2xl">Budgets - Coming Soon</div>} />
            <Route path="settings" element={<div className="text-2xl">Settings - Coming Soon</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

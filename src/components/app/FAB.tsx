import { Plus, FileText, ClipboardList, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const quickActions = [
  { name: "New RFQ", icon: FileText, color: "bg-blue-500" },
  { name: "New PO", icon: ClipboardList, color: "bg-green-500" },
  { name: "New Vendor", icon: Building2, color: "bg-purple-500" },
];

export const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 space-y-2"
          >
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Button
                    variant="secondary"
                    className={cn(
                      "h-12 shadow-elevated glass-panel",
                      "hover:scale-105 transition-transform"
                    )}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {action.name}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-glow",
          "bg-gradient-primary hover:scale-110 transition-transform"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="h-6 w-6" />
        </motion.div>
      </Button>
    </div>
  );
};

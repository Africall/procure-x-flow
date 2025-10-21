import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, FileSpreadsheet, FileText } from "lucide-react";

const reports = [
  {
    name: "RFQ Summary Report",
    description: "Overview of all RFQs with vendor response rates",
    category: "Procurement",
    lastGenerated: "2025-01-20",
  },
  {
    name: "Purchase Orders Report",
    description: "Detailed PO tracking and status summary",
    category: "Procurement",
    lastGenerated: "2025-01-22",
  },
  {
    name: "Budget vs Spend Analysis",
    description: "Departmental spending against allocated budgets",
    category: "Financial",
    lastGenerated: "2025-01-23",
  },
  {
    name: "Vendor Performance Scorecard",
    description: "Delivery times, quality ratings, and compliance",
    category: "Vendor Management",
    lastGenerated: "2025-01-21",
  },
  {
    name: "Invoice Matching Report",
    description: "3-way match status and payment tracking",
    category: "Accounts Payable",
    lastGenerated: "2025-01-23",
  },
];

const Reports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold">Reports & Analytics</h1>
        <p className="text-muted-foreground">
          Generate and export procurement insights
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.name} className="glass-panel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-5 w-5" />
                {report.name}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {report.category}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{report.description}</p>
              
              <div className="text-xs text-muted-foreground">
                Last generated: {report.lastGenerated}
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-1" />
                  PDF
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <FileSpreadsheet className="h-4 w-4 mr-1" />
                  Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle>Custom Report Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-6 border border-dashed border-border rounded-lg">
            <div>
              <h3 className="font-medium mb-1">Create Custom Report</h3>
              <p className="text-sm text-muted-foreground">
                Build your own reports with custom filters and date ranges
              </p>
            </div>
            <Button className="bg-gradient-primary shadow-glow">
              <Download className="h-4 w-4 mr-2" />
              Build Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;

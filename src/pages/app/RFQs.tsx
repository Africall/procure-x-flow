import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Plus, Eye } from "lucide-react";

const rfqs = [
  {
    id: "RFQ-001",
    title: "Office Supplies Q1 2025",
    department: "Administration",
    status: "Open",
    neededBy: "2025-02-15",
    quotesReceived: 3,
  },
  {
    id: "RFQ-002",
    title: "IT Equipment Refresh",
    department: "IT",
    status: "Closed",
    neededBy: "2025-01-30",
    quotesReceived: 5,
  },
  {
    id: "RFQ-003",
    title: "Marketing Materials",
    department: "Marketing",
    status: "Draft",
    neededBy: "2025-03-01",
    quotesReceived: 0,
  },
];

const RFQs = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold">Requests for Quotation</h1>
          <p className="text-muted-foreground">
            Manage and compare vendor quotes
          </p>
        </div>
        <Button className="bg-gradient-primary shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          New RFQ
        </Button>
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Active RFQs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>RFQ ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Needed By</TableHead>
                <TableHead>Quotes</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rfqs.map((rfq) => (
                <TableRow key={rfq.id}>
                  <TableCell className="font-mono">{rfq.id}</TableCell>
                  <TableCell className="font-medium">{rfq.title}</TableCell>
                  <TableCell>{rfq.department}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        rfq.status === "Open"
                          ? "default"
                          : rfq.status === "Closed"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {rfq.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{rfq.neededBy}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{rfq.quotesReceived}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RFQs;

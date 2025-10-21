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
import { ClipboardList, Download } from "lucide-react";

const pos = [
  {
    id: "PO-1234",
    vendor: "Tech Supplies Ltd",
    total: 45000,
    currency: "KES",
    status: "Approved",
    date: "2025-01-15",
  },
  {
    id: "PO-1235",
    vendor: "Office Depot",
    total: 28500,
    currency: "KES",
    status: "Issued",
    date: "2025-01-18",
  },
  {
    id: "PO-1236",
    vendor: "Print Masters",
    total: 12000,
    currency: "KES",
    status: "PartiallyReceived",
    date: "2025-01-20",
  },
];

const POs = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold">Purchase Orders</h1>
          <p className="text-muted-foreground">
            Track and manage purchase orders
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export PDF
        </Button>
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Active Purchase Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PO Number</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pos.map((po) => (
                <TableRow key={po.id}>
                  <TableCell className="font-mono">{po.id}</TableCell>
                  <TableCell className="font-medium">{po.vendor}</TableCell>
                  <TableCell>
                    {po.currency} {po.total.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        po.status === "Approved" || po.status === "Issued"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {po.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{po.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
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

export default POs;

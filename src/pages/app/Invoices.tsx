import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Receipt } from "lucide-react";

const invoices = [
  {
    id: "INV-001",
    poId: "PO-1234",
    vendor: "Tech Supplies Ltd",
    invoiceNo: "TS-2025-001",
    amount: 45000,
    currency: "KES",
    status: "Pending",
    dueDate: "2025-02-15",
    matchStatus: "3-way Match",
  },
  {
    id: "INV-002",
    poId: "PO-1235",
    vendor: "Office Depot",
    invoiceNo: "OD-2025-045",
    amount: 28500,
    currency: "KES",
    status: "Paid",
    dueDate: "2025-02-18",
    matchStatus: "2-way Match",
  },
];

const Invoices = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold">Invoices</h1>
        <p className="text-muted-foreground">
          Manage vendor invoices and payment matching
        </p>
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Accounts Payable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Invoice No.</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Match Status</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-mono">{invoice.id}</TableCell>
                  <TableCell className="font-medium">{invoice.vendor}</TableCell>
                  <TableCell>{invoice.invoiceNo}</TableCell>
                  <TableCell>
                    {invoice.currency} {invoice.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
                      {invoice.matchStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid" ? "default" : "secondary"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;

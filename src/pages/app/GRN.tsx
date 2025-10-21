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
import { ClipboardCheck } from "lucide-react";

const grns = [
  {
    id: "GRN-001",
    poId: "PO-1234",
    receivedBy: "John Doe",
    receivedAt: "2025-01-20 14:30",
    qtyReceived: 50,
    notes: "All items in good condition",
  },
  {
    id: "GRN-002",
    poId: "PO-1236",
    receivedBy: "Jane Smith",
    receivedAt: "2025-01-22 10:15",
    qtyReceived: 25,
    notes: "Partial delivery, remaining items pending",
  },
];

const GRN = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold">Goods Receipt Notes</h1>
        <p className="text-muted-foreground">
          Track received inventory and deliveries
        </p>
      </div>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            Recent Receipts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>GRN ID</TableHead>
                <TableHead>PO Reference</TableHead>
                <TableHead>Received By</TableHead>
                <TableHead>Received At</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grns.map((grn) => (
                <TableRow key={grn.id}>
                  <TableCell className="font-mono">{grn.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{grn.poId}</Badge>
                  </TableCell>
                  <TableCell>{grn.receivedBy}</TableCell>
                  <TableCell className="text-sm">{grn.receivedAt}</TableCell>
                  <TableCell>{grn.qtyReceived} units</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {grn.notes}
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

export default GRN;
